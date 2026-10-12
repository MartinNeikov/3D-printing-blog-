function ArticleForm({
  formData,
  errors,
  imageSource,
  imageError,
  submitError,
  isSubmitting,
  onChange,
  onImageSourceChange,
  onImageFileChange,
  onSubmit,
  fileInputRef,
  allowKeepCurrentImage = false,
  submitLabel,
  submittingLabel,
}) {
  return (
    <form onSubmit={onSubmit} noValidate>
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
          value={formData.title}
          onChange={onChange}
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
          onChange={onChange}
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
          value={formData.short_description}
          onChange={onChange}
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
          value={formData.content}
          onChange={onChange}
        />

        {errors.content && (
          <p className="form-error">
            {errors.content}
          </p>
        )}
      </div>

      <div className="form-group">
        <span className="form-label">
          Image Source
        </span>

        <div className="form-radio-group">
          {allowKeepCurrentImage && (
            <label className="form-radio-option">
              <input
                type="radio"
                name="imageSource"
                value="current"
                checked={imageSource === "current"}
                onChange={onImageSourceChange}
              />

              <span>Keep Current Image</span>
            </label>
          )}

          <label className="form-radio-option">
            <input
              type="radio"
              name="imageSource"
              value="url"
              checked={imageSource === "url"}
              onChange={onImageSourceChange}
            />

            <span>Image URL</span>
          </label>

          <label className="form-radio-option">
            <input
              type="radio"
              name="imageSource"
              value="upload"
              checked={imageSource === "upload"}
              onChange={onImageSourceChange}
            />

            <span>Upload Image</span>
          </label>
        </div>
      </div>

      {imageSource === "url" && (
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
            value={formData.image_url}
            onChange={onChange}
            placeholder="https://example.com/image.jpg"
          />

          {errors.image_url && (
            <p className="form-error">
              {errors.image_url}
            </p>
          )}
        </div>
      )}

      {imageSource === "upload" && (
        <div className="form-group">
          <label
            htmlFor="image_file"
            className="form-label"
          >
            Upload Image
          </label>

          <input
            ref={fileInputRef}
            type="file"
            id="image_file"
            name="image_file"
            className="form-input"
            accept="image/jpeg,image/png,image/webp"
            onChange={onImageFileChange}
          />

          <p className="form-help">
            JPEG, PNG or WebP. Maximum file size: 5 MB.
          </p>
        </div>
      )}

      {imageError && (
        <p className="form-error form-image-error">
          {imageError}
        </p>
      )}

      {submitError && (
        <p className="form-error">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? submittingLabel
          : submitLabel}
      </button>
    </form>
  );
}

export default ArticleForm;