import { supabase } from "../lib/supabaseClient.js";

export async function getAllArticles(signal) {
  let query = supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getArticleById(articleId, signal) {
  let query = supabase
    .from("articles")
    .select("*")
    .eq("id", articleId)
    .maybeSingle();

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
}

export async function getArticlesByCategory(category, signal) {
  let query = supabase
    .from("articles")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function searchArticles(searchTerm, signal) {
  const safeSearchTerm = searchTerm.replaceAll(",", " ");

  let query = supabase
    .from("articles")
    .select("*")
    .or(
      `title.ilike.%${safeSearchTerm}%,short_description.ilike.%${safeSearchTerm}%,category.ilike.%${safeSearchTerm}%`
    )
    .order("created_at", { ascending: false });

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getRecentArticles(limit = 3, signal) {
  let query = supabase
    .from("articles")
    .select("id, title, image_url, created_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function createArticle(articleData) {
  const { data, error } = await supabase
    .from("articles")
    .insert(articleData)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateArticle(articleId, articleData) {
  const { data, error } = await supabase
    .from("articles")
    .update(articleData)
    .eq("id", articleId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteArticle(articleId) {
  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", articleId);

  if (error) {
    throw error;
  }
}