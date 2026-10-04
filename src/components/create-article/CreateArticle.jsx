import { useState } from "react";

import { validateArticle } from "../../utils/validation.js";

function CreateArticle() {
  const [data, setData] = useState({
    title: "",
    category: "",
    short_description: "",
    content: "",
    image_url: "",
  });

  const [errors, setErrors] = useState({});

  function changeHandler(e) {
    setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    setErrors((state) => ({
      ...state,
      [e.target.name]: "",
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    const validationErrors = validateArticle(data);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Supabase INSERT ще добавим по-късно.
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-5 bg-light rounded">
              <h1 className="mb-4 text-center">
                Create Article
              </h1>

              <form onSubmit={submitHandler} noValidate>
                <div className="mb-3">
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
                    className="form-control"
                    placeholder="Enter article title"
                    value={data.title}
                    onChange={changeHandler}
                  />

                  {errors.title && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.title}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="category"
                    className="form-label"
                  >
                    Category
                  </label>

                  <select
                    id="category"
                    name="category"
                    className="form-control"
                    value={data.category}
                    onChange={changeHandler}
                  >
                    <option value="">
                      Select category
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
                    <p className="text-danger mt-1 mb-0">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="short_description"
                    className="form-label"
                  >
                    Short Description
                  </label>

                  <textarea
                    id="short_description"
                    name="short_description"
                    className="form-control"
                    placeholder="Enter a short description"
                    value={data.short_description}
                    onChange={changeHandler}
                    rows="3"
                  />

                  {errors.short_description && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.short_description}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="content"
                    className="form-label"
                  >
                    Content
                  </label>

                  <textarea
                    id="content"
                    name="content"
                    className="form-control"
                    placeholder="Write your article..."
                    value={data.content}
                    onChange={changeHandler}
                    rows="10"
                  />

                  {errors.content && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.content}
                    </p>
                  )}
                </div>

                <div className="mb-4">
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
                    className="form-control"
                    placeholder="/images/articles/example.png"
                    value={data.image_url}
                    onChange={changeHandler}
                  />

                  {errors.image_url && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.image_url}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Create Article
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateArticle;