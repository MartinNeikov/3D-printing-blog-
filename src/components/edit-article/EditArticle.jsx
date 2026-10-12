import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useNavigate,
  useParams,
} from "react-router";

import {
  getArticleById,
  updateArticle,
} from "../../services/articleService.js";

import {
  deleteArticleImage,
  uploadArticleImage,
} from "../../services/imageService.js";

import { useAuth } from "../../hooks/useAuth.js";
import { validateArticle } from "../../utils/validation.js";

import ArticleForm from "../article-form/ArticleForm.jsx";

function EditArticle() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const { user } = useAuth();

  const [article, setArticle] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    short_description: "",
    content: "",
    image_url: "",
  });

  const [imageSource, setImageSource] =
    useState("current");

  const [imageFile, setImageFile] =
    useState(null);

  const [errors, setErrors] = useState({});
  const [imageError, setImageError] =
    useState("");
  const [submitError, setSubmitError] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(true);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [loadError, setLoadError] =
    useState("");

  const [articleExists, setArticleExists] =
    useState(true);

  const [isOwner, setIsOwner] =
    useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticle() {
      try {
        setIsLoading(true);
        setLoadError("");

        const data = await getArticleById(
          articleId,
          controller.signal
        );

        if (!data) {
          setArticleExists(false);
          return;
        }

        if (data.author_id !== user.id) {
          setIsOwner(false);
          return;
        }

        setArticle(data);

        setFormData({
          title: data.title ?? "",
          category: data.category ?? "",
          short_description:
            data.short_description ?? "",
          content: data.content ?? "",
          image_url: data.image_url ?? "",
        });

        setImageSource("current");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(
          "Failed to load article:",
          error
        );

        setLoadError(
          "Unable to load the article. Please try again later."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadArticle();

    return () => {
      controller.abort();
    };
  }, [articleId, user.id]);

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((state) => ({
        ...state,
        [name]: "",
      }));
    }

    if (name === "image_url") {
      setImageError("");
    }

    if (submitError) {
      setSubmitError("");
    }
  }

  function imageSourceChangeHandler(e) {
    const selectedSource = e.target.value;

    setImageSource(selectedSource);
    setImageError("");
    setSubmitError("");

    setImageFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    if (selectedSource === "current") {
      setFormData((state) => ({
        ...state,
        image_url: article.image_url ?? "",
      }));

      return;
    }

    if (selectedSource === "upload") {
      setFormData((state) => ({
        ...state,
        image_url: "",
      }));

      return;
    }

    if (selectedSource === "url") {
      setFormData((state) => ({
        ...state,
        image_url:
          article.image_storage_path
            ? ""
            : article.image_url ?? "",
      }));
    }
  }

  function imageFileChangeHandler(e) {
    const file = e.target.files[0] ?? null;

    setImageFile(file);
    setImageError("");
    setSubmitError("");
  }

  async function submitHandler(e) {
    e.preventDefault();

    const validationErrors =
      validateArticle(formData);

    if (imageSource !== "url") {
      delete validationErrors.image_url;
    }

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    if (
      imageSource === "url" &&
      !formData.image_url.trim()
    ) {
      setImageError(
        "Please provide an image URL."
      );

      return;
    }

    if (
      imageSource === "upload" &&
      !imageFile
    ) {
      setImageError(
        "Please select an image to upload."
      );

      return;
    }

    let uploadedStoragePath = null;

    try {
      setErrors({});
      setImageError("");
      setSubmitError("");
      setIsSubmitting(true);

      let imageUrl = article.image_url;
      let imageStoragePath =
        article.image_storage_path;

      if (imageSource === "url") {
        imageUrl =
          formData.image_url.trim();

        imageStoragePath = null;
      }

      if (imageSource === "upload") {
        const uploadedImage =
          await uploadArticleImage(
            imageFile,
            user.id
          );

        imageUrl = uploadedImage.imageUrl;
        imageStoragePath =
          uploadedImage.storagePath;

        uploadedStoragePath =
          uploadedImage.storagePath;
      }

      const articleData = {
        title: formData.title.trim(),
        category: formData.category,
        short_description:
          formData.short_description.trim(),
        content: formData.content.trim(),
        image_url: imageUrl,
        image_storage_path:
          imageStoragePath,
      };

      const updatedArticle =
        await updateArticle(
          articleId,
          articleData
        );

      const oldStoragePath =
        article.image_storage_path;

      const imageWasReplaced =
        imageSource !== "current";

      if (
        imageWasReplaced &&
        oldStoragePath &&
        oldStoragePath !== imageStoragePath
      ) {
        try {
          await deleteArticleImage(
            oldStoragePath
          );
        } catch (cleanupError) {
          console.error(
            "Failed to remove old article image:",
            cleanupError
          );
        }
      }

      navigate(
        `/articles/${updatedArticle.id}`
      );
    } catch (error) {
      console.error(
        "Failed to update article:",
        error
      );

      if (uploadedStoragePath) {
        try {
          await deleteArticleImage(
            uploadedStoragePath
          );
        } catch (cleanupError) {
          console.error(
            "Failed to remove unused uploaded image:",
            cleanupError
          );
        }
      }

      setSubmitError(
        error.message ||
          "Unable to update the article. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <section className="page-status">
        <div className="content-container">
          <p>Loading article...</p>
        </div>
      </section>
    );
  }

  if (loadError) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h2>Unable to load article</h2>

          <p>{loadError}</p>
        </div>
      </section>
    );
  }

  if (!articleExists) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h2>Article not found</h2>

          <p>
            The article you are trying to edit
            does not exist.
          </p>
        </div>
      </section>
    );
  }

  if (!isOwner) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h2>Access denied</h2>

          <p>
            You can only edit articles that you
            created.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page">
      <div className="form-container">
        <div className="form-card">
          <h1 className="form-title">
            Edit Article
          </h1>

          <ArticleForm
            formData={formData}
            errors={errors}
            imageSource={imageSource}
            imageError={imageError}
            submitError={submitError}
            isSubmitting={isSubmitting}
            onChange={changeHandler}
            onImageSourceChange={
              imageSourceChangeHandler
            }
            onImageFileChange={
              imageFileChangeHandler
            }
            onSubmit={submitHandler}
            fileInputRef={fileInputRef}
            allowKeepCurrentImage={true}
            submitLabel="Save Changes"
            submittingLabel="Saving..."
          />
        </div>
      </div>
    </section>
  );
}

export default EditArticle;