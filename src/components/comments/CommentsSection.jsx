import { useEffect, useState } from "react";
import { Link } from "react-router";

import {
  createComment,
  deleteComment,
  getCommentsByArticleId,
} from "../../services/commentService.js";

import { useAuth } from "../../hooks/useAuth.js";

function CommentsSection({ articleId }) {
  const { user, isAuthenticated } = useAuth();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  const [error, setError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const [deletingCommentId, setDeletingCommentId] = useState(null);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadComments() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getCommentsByArticleId(articleId, controller.signal);

        if (controller.signal.aborted) {
          return;
        }

        setComments(data);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load comments:", error);

        setError("Unable to load comments. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadComments();

    return () => {
      controller.abort();
    };
  }, [articleId]);

  async function submitHandler(e) {
    e.preventDefault();

    const trimmedComment = commentText.trim();

    if (!trimmedComment) {
      setSubmitError("Comment cannot be empty.");
      return;
    }

    if (trimmedComment.length > 1000) {
      setSubmitError("Comment cannot be longer than 1000 characters.");
      return;
    }

    try {
      setIsPosting(true);
      setSubmitError("");

      const newComment = await createComment({
        article_id: articleId,
        author_id: user.id,
        content: trimmedComment,
      });

      setComments((currentComments) => [...currentComments, newComment]);

      setCommentText("");
    } catch (error) {
      console.error("Failed to create comment:", error);

      setSubmitError(
        error.message || "Unable to post your comment. Please try again.",
      );
    } finally {
      setIsPosting(false);
    }
  }

  async function deleteHandler(commentId) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this comment?",
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setDeletingCommentId(commentId);
      setDeleteError("");

      await deleteComment(commentId);

      setComments((currentComments) =>
        currentComments.filter((comment) => comment.id !== commentId),
      );
    } catch (error) {
      console.error("Failed to delete comment:", error);

      setDeleteError(
        error.message || "Unable to delete the comment. Please try again.",
      );
    } finally {
      setDeletingCommentId(null);
    }
  }

  return (
    <section className="comments-section">
      <h2 className="comments-title">Comments ({comments.length})</h2>

      {isAuthenticated ? (
        <form className="comment-form" onSubmit={submitHandler} noValidate>
          <label htmlFor="comment" className="form-label">
            Leave a comment
          </label>

          <textarea
            id="comment"
            className="form-input comment-textarea"
            value={commentText}
            maxLength={1000}
            rows={4}
            placeholder="Write your comment..."
            onChange={(e) => {
              setCommentText(e.target.value);
              setSubmitError("");
            }}
          />

          <div className="comment-form-footer">
            <small>{commentText.length}/1000</small>

            <button
              type="submit"
              className="form-submit comment-submit-button"
              disabled={isPosting}
            >
              {isPosting ? "Posting..." : "Post Comment"}
            </button>
          </div>

          {submitError && <p className="form-error">{submitError}</p>}
        </form>
      ) : (
        <p className="comment-login-message">
          Please <Link to="/login">log in</Link> to leave a comment.
        </p>
      )}

      {deleteError && <p className="form-error">{deleteError}</p>}

      {isLoading && <p>Loading comments...</p>}

      {error && <p className="form-error">{error}</p>}

      {!isLoading && !error && comments.length === 0 && <p>No comments yet.</p>}

      {!isLoading &&
        !error &&
        comments.map((comment) => {
          const authorName = comment.author?.name || "Unknown user";

          const authorInitial = authorName.charAt(0).toUpperCase();

          const isCommentOwner =
            isAuthenticated && comment.author_id === user?.id;

          return (
            <article key={comment.id} className="comment-card">
              <div className="comment-author">
                {comment.author?.avatar_url ? (
                  <img
                    src={comment.author.avatar_url}
                    alt={`${authorName} avatar`}
                    className="comment-avatar"
                  />
                ) : (
                  <span className="comment-avatar-fallback">
                    {authorInitial}
                  </span>
                )}

                <div>
                  <strong>{authorName}</strong>

                  <p className="comment-date">
                    {new Date(comment.created_at).toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="comment-content">{comment.content}</p>

              {isCommentOwner && (
                <button
                  type="button"
                  className="comment-delete-button"
                  onClick={() => deleteHandler(comment.id)}
                  disabled={deletingCommentId === comment.id}
                  aria-label="Delete comment"
                  title="Delete comment"
                />
              )}
            </article>
          );
        })}
    </section>
  );
}

export default CommentsSection;
