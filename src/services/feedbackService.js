import { supabase } from "../lib/supabaseClient.js";

export async function getArticleFeedback(articleId, signal) {
  let query = supabase
    .from("article_feedback")
    .select("id, user_id, is_useful")
    .eq("article_id", articleId);

  if (signal) {
    query = query.abortSignal(signal);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function createFeedback(feedbackData) {
  const { data, error } = await supabase
    .from("article_feedback")
    .insert(feedbackData)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateFeedback(feedbackId, isUseful) {
  const { data, error } = await supabase
    .from("article_feedback")
    .update({
      is_useful: isUseful,
    })
    .eq("id", feedbackId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteFeedback(feedbackId) {
  const { data, error } = await supabase
    .from("article_feedback")
    .delete()
    .eq("id", feedbackId)
    .select("id")
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("Feedback could not be removed.");
  }

  return data.id;
}