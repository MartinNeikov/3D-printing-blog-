import { useState } from "react";

import { validateArticle } from "../../utils/validation.js";

function CreateArticle() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    short_description: "",
    content: "",
    image_url: "",
  });

  const [errors, setErrors] = useState({});

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

    // Supabase INSERT will be added after Authentication.
  }

  return (
    <section className="form-page">
      <div className="form-container">
        <div className="form-card">
          <h1 className="form-title">
            Create Article
          </h1>

          <form onSubmit={submitHandler} noValidate>
            <div className="form-group">
              <label
                htmlFor="title"
                className="form-label"
              >
                Title
              </label>

              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter article title"
                value={formData.title}
                onChange={changeHandler}
              />

              {errors.title && (
                <p className="form-error">
                  {errors.title}
                </p>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="category"
                className="form-label"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={changeHandler}
              >
                <option value="">
                  Select a category
                </option>

                <option value="3D Printers">
                  3D Printers
                </option>

                <option value="Filaments">
                  Filaments
                </option>

                <option value="Print Settings">
                  Print Settings
                </option>

                <option value="Projects">
                  Projects
                </option>
              </select>

              {errors.category && (
                <p className="form-error">
                  {errors.category}
                </p>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="short_description"
                className="form-label"
              >
                Short Description
              </label>

              <textarea
                id="short_description"
                name="short_description"
                className="form-textarea"
                rows="4"
                placeholder="Write a short description"
                value={formData.short_description}
                onChange={changeHandler}
              />

              {errors.short_description && (
                <p className="form-error">
                  {errors.short_description}
                </p>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="content"
                className="form-label"
              >
                Content
              </label>

              <textarea
                id="content"
                name="content"
                className="form-textarea"
                rows="10"
                placeholder="Write the article content"
                value={formData.content}
                onChange={changeHandler}
              />

              {errors.content && (
                <p className="form-error">
                  {errors.content}
                </p>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="image_url"
                className="form-label"
              >
                Image URL
              </label>

              <input
                type="text"
                id="image_url"
                name="image_url"
                className="form-input"
                placeholder="/images/articles/example.png"
                value={formData.image_url}
                onChange={changeHandler}
              />

              {errors.image_url && (
                <p className="form-error">
                  {errors.image_url}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="form-submit"
            >
              Create Article
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateArticle;