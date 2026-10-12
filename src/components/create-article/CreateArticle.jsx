import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import { createArticle } from "../../services/articleService.js";
import {
  deleteArticleImage,
  uploadArticleImage,
} from "../../services/imageService.js";

import { useAuth } from "../../hooks/useAuth.js";
import { validateArticle } from "../../utils/validation.js";

import ArticleForm from "../article-form/ArticleForm.jsx";

function CreateArticle() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    short_description: "",
    content: "",
    image_url: "",
  });

  const [imageSource, setImageSource] = useState("url");
  const [imageFile, setImageFile] = useState(null);

  const [errors, setErrors] = useState({});
  const [imageError, setImageError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (selectedSource === "url") {
      setImageFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }

    if (selectedSource === "upload") {
      setFormData((state) => ({
        ...state,
        image_url: "",
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

    const validationErrors = validateArticle(formData);

    if (imageSource !== "url") {
      delete validationErrors.image_url;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (
      imageSource === "url" &&
      !formData.image_url.trim()
    ) {
      setImageError("Please provide an image URL.");
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

      let imageUrl = null;
      let imageStoragePath = null;

      if (imageSource === "url") {
        imageUrl = formData.image_url.trim();
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
        image_storage_path: imageStoragePath,
      };

      const article =
        await createArticle(articleData);

      navigate(`/articles/${article.id}`);
    } catch (error) {
      console.error(
        "Failed to create article:",
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
          "Unable to create the article. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="form-page">
      <div className="form-container">
        <div className="form-card">
          <h1 className="form-title">
            Create Article
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
            allowKeepCurrentImage={false}
            submitLabel="Create Article"
            submittingLabel="Creating..."
          />
        </div>
      </div>
    </section>
  );
}

export default CreateArticle;