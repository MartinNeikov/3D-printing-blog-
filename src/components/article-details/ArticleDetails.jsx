import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { supabase } from "../../lib/supabaseClient.js";
import Sidebar from "../sidebar/Sidebar.jsx";

function ArticleDetails() {
  const { articleId } = useParams();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticle() {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("id", articleId)
          .abortSignal(controller.signal)
          .maybeSingle();

        if (error) {
          throw error;
        }

        setArticle(data);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load article:", error);
        setError(error.message);
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

  if (isLoading) {
    return (
      <div className="container py-5 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h2>Unable to load article</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container py-5 text-center">
        <h2>Article not found</h2>
        <p>The article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="site-cover site-cover-sm same-height overlay single-page"
        style={{
          backgroundImage: "url('/images/hero/3d-printing-hero.png')",
        }}
      >
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-6">
              <div className="post-entry text-center">
                <h1 className="mb-4">{article.title}</h1>

                <div className="post-meta align-items-center text-center">
                  <figure className="author-figure mb-0 me-3 d-inline-block">
                    <img
                      src="/images/authors/Martin.png"
                      alt="Author"
                      className="img-fluid"
                    />
                  </figure>

                  <span className="d-inline-block mt-1">
                    By Martin
                  </span>

                  <span>
                    &nbsp;-&nbsp;
                    {new Date(article.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="post-content-body">
                <p>{article.content}</p>

                <div className="row my-4">
                  <div className="col-md-12 mb-4">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleDetails;