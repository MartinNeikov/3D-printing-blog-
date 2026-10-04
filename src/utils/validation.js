export function validateRegister(data) {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  }

  if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export function validateArticle(data) {
  const errors = {};

  if (data.title.trim().length < 5) {
    errors.title = "Title must be at least 5 characters.";
  }

  if (!data.category) {
    errors.category = "Please select a category.";
  }

  if (data.short_description.trim().length < 20) {
    errors.short_description =
      "Short description must be at least 20 characters.";
  }

  if (data.content.trim().length < 50) {
    errors.content =
      "Article content must be at least 50 characters.";
  }

  if (!data.image_url.trim()) {
    errors.image_url = "Image is required.";
  }

  return errors;
}