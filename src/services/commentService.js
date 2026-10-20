import { supabase } from "../lib/supabaseClient.js";

export async function getCommentsByArticleId(articleId, signal) {
  let query = supabase
    .from("comments")
    .select(`
      id,
      article_id,
      author_id,
      content,
      created_at,
      author:profiles (
        name,
        avatar_url
      )
    `)
    .eq("article_id", articleId)
    .order("created_at", { ascending: true });

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function createComment(commentData) {
  const { data, error } = await supabase
    .from("comments")
    .insert(commentData)
    .select(`
      id,
      article_id,
      author_id,
      content,
      created_at,
      author:profiles (
        name,
        avatar_url
      )
    `)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteComment(commentId) {
  const { data, error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId)
    .select("id")
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("Comment could not be deleted.");
  }

  return data.id;
}