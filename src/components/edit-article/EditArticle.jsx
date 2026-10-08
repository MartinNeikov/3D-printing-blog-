import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getArticleById } from "../../services/articleService.js";
import { validateArticle } from "../../utils/validation.js";

function EditArticle() {
  const { articleId } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    short_description: "",
    content: "",
    image_url: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [articleExists, setArticleExists] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticle() {
      try {
        setIsLoading(true);
        setLoadError("");

        const data = await getArticleById(articleId, controller.signal);
        
        if (!data) {
          setArticleExists(false);
          return;
        }

        setFormData({
          title: data.title ?? "",
          category: data.category ?? "",
          short_description: data.short_description ?? "",
          content: data.content ?? "",
          image_url: data.image_url ?? "",
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load article:", error);

        setLoadError("Unable to load the article. Please try again later.");
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
  }, [articleId]);

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
  }

  function submitHandler(e) {
    e.preventDefault();

    const validationErrors = validateArticle(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Supabase UPDATE will be added after Authentication.
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
          <p>The article you are trying to edit does not exist.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page">
      <div className="form-container">
        <div className="form-card">
          <h1 className="form-title">Edit Article</h1>

          <form onSubmit={submitHandler} noValidate>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title
              </label>

              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                value={formData.title}
                onChange={changeHandler}
              />

              {errors.title && <p className="form-error">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category
              </label>

              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={changeHandler}
              >
                <option value="">Select a category</option>
                <option value="3D Printers">3D Printers</option>
                <option value="Filaments">Filaments</option>
                <option value="Print Settings">Print Settings</option>
                <option value="Projects">Projects</option>
              </select>

              {errors.category && (
                <p className="form-error">{errors.category}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="short_description" className="form-label">
                Short Description
              </label>

              <textarea
                id="short_description"
                name="short_description"
                className="form-textarea"
                rows="4"
                value={formData.short_description}
                onChange={changeHandler}
              />

              {errors.short_description && (
                <p className="form-error">{errors.short_description}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="content" className="form-label">
                Content
              </label>

              <textarea
                id="content"
                name="content"
                className="form-textarea"
                rows="10"
                value={formData.content}
                onChange={changeHandler}
              />

              {errors.content && <p className="form-error">{errors.content}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="image_url" className="form-label">
                Image URL
              </label>

              <input
                type="text"
                id="image_url"
                name="image_url"
                className="form-input"
                value={formData.image_url}
                onChange={changeHandler}
              />

              {errors.image_url && (
                <p className="form-error">{errors.image_url}</p>
              )}
            </div>

            <button type="submit" className="form-submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditArticle;
