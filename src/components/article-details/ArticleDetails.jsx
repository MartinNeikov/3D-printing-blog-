import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import {
  deleteArticle,
  getArticleById,
} from "../../services/articleService.js";

import { getProfile } from "../../services/profileService.js";
import { useAuth } from "../../hooks/useAuth.js";
import { deleteArticleImage } from "../../services/imageService.js";

import Sidebar from "../sidebar/Sidebar.jsx";
import CommentsSection from "../comments/CommentsSection.jsx";

function ArticleDetails() {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth();

  const [article, setArticle] = useState(null);
  const [authorProfile, setAuthorProfile] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticle() {
      try {
        setIsLoading(true);
        setError(null);
        setAuthorProfile(null);

        const data = await getArticleById(
          articleId,
          controller.signal,
        );

        if (controller.signal.aborted) {
          return;
        }

        setArticle(data);

        if (data?.author_id) {
          try {
            const profileData = await getProfile(data.author_id);

            if (!controller.signal.aborted) {
              setAuthorProfile(profileData);
            }
          } catch (profileError) {
            console.error(
              "Failed to load author profile:",
              profileError,
            );
          }
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load article:", error);

        setError(
          "Unable to load article. Please try again later.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadArticle();

    return () => {
      controller.abort();
    };
  }, [articleId]);

  const isOwner =
    isAuthenticated && article?.author_id === user?.id;

  async function deleteHandler() {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this article?",
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setDeleteError("");
      setIsDeleting(true);

      await deleteArticle(articleId);

      if (article.image_storage_path) {
        try {
          await deleteArticleImage(
            article.image_storage_path,
          );
        } catch (cleanupError) {
          console.error(
            "Failed to remove article image from storage:",
            cleanupError,
          );
        }
      }

      navigate("/articles");
    } catch (error) {
      console.error("Failed to delete article:", error);

      setDeleteError(
        error.message ||
          "Unable to delete the article. Please try again.",
      );
    } finally {
      setIsDeleting(false);
    }
  }

  if (isLoading) {
    return (
      <section className="page-status">
        <div className="content-container">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h2>Unable to load article</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h2>Article not found</h2>
          <p>
            The article you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  const authorName =
    authorProfile?.name || "Unknown author";

  const authorInitial = authorName
    .charAt(0)
    .toUpperCase();

  return (
    <>
      <section
        className="article-hero"
        style={{
          backgroundImage:
            "url('/images/hero/3d-printing-hero.png')",
        }}
      >
        <div className="content-container">
          <div className="article-hero-content">
            <h1 className="article-hero-title">
              {article.title}
            </h1>

            <div className="post-meta">
              <figure className="author-figure">
                {authorProfile?.avatar_url ? (
                  <img
                    src={authorProfile.avatar_url}
                    alt={`${authorName} avatar`}
                  />
                ) : (
                  <span className="article-author-fallback">
                    {authorInitial}
                  </span>
                )}
              </figure>

              <span>By {authorName}</span>

              <span>
                {" • "}
                Published{" "}
                {new Date(
                  article.created_at,
                ).toLocaleDateString()}
              </span>

              {article.updated_at &&
                article.updated_at !==
                  article.created_at && (
                  <span>
                    {" • "}
                    Updated{" "}
                    {new Date(
                      article.updated_at,
                    ).toLocaleDateString()}
                  </span>
                )}
            </div>

            {isOwner && (
              <div className="article-owner-actions">
                <Link
                  to={`/articles/${article.id}/edit`}
                  className="article-edit-button"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  className="article-delete-button"
                  onClick={deleteHandler}
                  disabled={isDeleting}
                >
                  {isDeleting
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            )}

            {deleteError && (
              <p className="form-error">
                {deleteError}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-container article-details-layout">
          <article className="article-main-content">
            <div className="post-content-body">
              <p>{article.content}</p>

              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="article-content-image"
                />
              )}
            </div>

            <CommentsSection
              articleId={article.id}
            />
          </article>

          <Sidebar />
        </div>
      </section>
    </>
  );
}

export default ArticleDetails;