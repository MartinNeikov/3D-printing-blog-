import { useEffect, useState } from "react";

import {
  createFeedback,
  deleteFeedback,
  getArticleFeedback,
  updateFeedback,
} from "../../services/feedbackService.js";

import { useAuth } from "../../hooks/useAuth.js";

function ArticleFeedback({ articleId }) {
  const { user, isAuthenticated } = useAuth();

  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadFeedback() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getArticleFeedback(articleId, controller.signal);

        if (controller.signal.aborted) {
          return;
        }

        setFeedback(data);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load article feedback:", error);

        setError("Unable to load article feedback. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadFeedback();

    return () => {
      controller.abort();
    };
  }, [articleId]);

  const usefulCount = feedback.filter((item) => item.is_useful === true).length;

  const notUsefulCount = feedback.filter(
    (item) => item.is_useful === false,
  ).length;

  const userFeedback = feedback.find((item) => item.user_id === user?.id);

  async function feedbackHandler(isUseful) {
    if (!isAuthenticated || isUpdating) {
      return;
    }

    try {
      setIsUpdating(true);
      setError("");

      if (!userFeedback) {
        const newFeedback = await createFeedback({
          article_id: articleId,
          user_id: user.id,
          is_useful: isUseful,
        });

        setFeedback((currentFeedback) => [...currentFeedback, newFeedback]);

        return;
      }

      if (userFeedback.is_useful === isUseful) {
        await deleteFeedback(userFeedback.id);

        setFeedback((currentFeedback) =>
          currentFeedback.filter((item) => item.id !== userFeedback.id),
        );

        return;
      }

      const updatedFeedback = await updateFeedback(userFeedback.id, isUseful);

      setFeedback((currentFeedback) =>
        currentFeedback.map((item) =>
          item.id === updatedFeedback.id ? updatedFeedback : item,
        ),
      );
    } catch (error) {
      console.error("Failed to update article feedback:", error);

      setError(
        error.message || "Unable to update your feedback. Please try again.",
      );
    } finally {
      setIsUpdating(false);
    }
  }

  if (isLoading) {
    return (
      <section className="article-feedback">
        <p>Loading feedback...</p>
      </section>
    );
  }

  return (
    <section className="article-feedback">
      <h3>Was this article useful?</h3>

      <div className="article-feedback-actions">
        <button
          type="button"
          className={`feedback-button feedback-useful ${
            userFeedback?.is_useful === true ? "feedback-button-active" : ""
          }`}
          onClick={() => feedbackHandler(true)}
          disabled={!isAuthenticated || isUpdating}
        >
          Useful ({usefulCount})
        </button>

        <button
          type="button"
          className={`feedback-button feedback-not-useful ${
            userFeedback?.is_useful === false ? "feedback-button-active" : ""
          }`}
          onClick={() => feedbackHandler(false)}
          disabled={!isAuthenticated || isUpdating}
        >
          Not useful ({notUsefulCount})
        </button>
      </div>

      {!isAuthenticated && (
        <p className="feedback-login-message">Log in to rate this article.</p>
      )}

      {error && <p className="form-error">{error}</p>}
    </section>
  );
}

export default ArticleFeedback;
