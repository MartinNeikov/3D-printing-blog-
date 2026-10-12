import { supabase } from "../lib/supabaseClient.js";

const articleImagesBucket = "article-images";

const maxFileSize = 5 * 1024 * 1024;

const allowedImageTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export async function uploadArticleImage(file, userId) {
  if (!file) {
    throw new Error("Please select an image.");
  }

  if (!allowedImageTypes.includes(file.type)) {
    throw new Error(
      "Only JPEG, PNG and WebP images are allowed."
    );
  }

  if (file.size > maxFileSize) {
    throw new Error(
      "The image must be smaller than 5 MB."
    );
  }

  const fileExtension =
    file.name.split(".").pop()?.toLowerCase() || "jpg";

  const fileName =
    `${crypto.randomUUID()}.${fileExtension}`;

  const storagePath =
    `${userId}/${fileName}`;

  const { error } = await supabase.storage
    .from(articleImagesBucket)
    .upload(storagePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from(articleImagesBucket)
    .getPublicUrl(storagePath);

  return {
    imageUrl: data.publicUrl,
    storagePath,
  };
}

export async function deleteArticleImage(storagePath) {
  if (!storagePath) {
    return;
  }

  const { error } = await supabase.storage
    .from(articleImagesBucket)
    .remove([storagePath]);

  if (error) {
    throw error;
  }
}