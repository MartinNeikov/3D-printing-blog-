import { supabase } from "../lib/supabaseClient.js";

const AVATAR_BUCKET = "avatars";

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateProfile(userId, profileData) {
  const { data, error } = await supabase
    .from("profiles")
    .update(profileData)
    .eq("id", userId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function uploadAvatar(userId, file) {
  const fileExtension = file.name.split(".").pop();
  const fileName = `avatar-${Date.now()}.${fileExtension}`;
  const filePath = `${userId}/${fileName}`;

  const { error } = await supabase.storage
    .from(AVATAR_BUCKET)
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from(AVATAR_BUCKET)
    .getPublicUrl(filePath);

  return {
    avatarUrl: data.publicUrl,
    avatarPath: filePath,
  };
}

export async function deleteAvatar(filePath) {
  if (!filePath) {
    return;
  }

  const { error } = await supabase.storage
    .from(AVATAR_BUCKET)
    .remove([filePath]);

  if (error) {
    throw error;
  }
}