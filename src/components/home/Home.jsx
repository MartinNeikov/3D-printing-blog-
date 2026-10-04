import { useEffect, useState } from "react";

import { supabase } from "../../lib/supabaseClient.js";

import ArticleCard from "../cards/article-card/ArticleCard.jsx";
import FeaturedArticleCard from "../cards/featured-article-card/FeaturedArticleCard.jsx";
import SectionHeader from "../section-header/SectionHeader.jsx";

const categories = [
  {
    title: "3D Printers",
    route: "/categories/3d-printers",
  },
  {
    title: "Filaments",
    route: "/categories/filaments",
  },
  {
    title: "Print Settings",
    route: "/categories/print-settings",
  },
  {
    title: "Projects",
    route: "/categories/projects",
  },
];

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticles() {
      try {
        const { data, error } = await supabase
          .from("articles")
          .select(
            "id, title, category, short_description, image_url, created_at"
          )
          .order("created_at", { ascending: false })
          .abortSignal(controller.signal);

        if (error) {
          throw error;
        }

        setArticles(data ?? []);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load home articles:", error);
        setError("Unable to load articles. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadArticles();

    return () => {
      controller.abort();
    };
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="mb-3">
                Learn. Share. Print Better.
              </h1>

              <p className="mb-4">
                PrintForge is a 3D printing community for sharing
                practical guides, printer knowledge, filament tips,
                print settings, troubleshooting and creative projects.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/hero/3d-printing-hero.png"
                alt="3D printing workspace"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {isLoading && (
        <section className="section">
          <div className="container">
            <p>Loading articles...</p>
          </div>
        </section>
      )}

      {error && (
        <section className="section">
          <div className="container">
            <h2>Unable to load articles</h2>
            <p>{error}</p>
          </div>
        </section>
      )}

      {!isLoading && !error && (
        <>
          {featuredArticles.length > 0 && (
            <section className="section">
              <div className="container">
                <SectionHeader
                  title="Latest Articles"
                  link="/articles"
                />

                <div className="row align-items-stretch retro-layout">
                  {featuredArticles.map((article) => (
                    <div
                      className="col-md-4 mb-4"
                      key={article.id}
                    >
                      <FeaturedArticleCard
                        id={article.id}
                        image={article.image_url}
                        date={formatDate(article.created_at)}
                        title={article.title}
                        className="h-entry v-height gradient"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {categories.map((category) => {
            const categoryArticles = articles
              .filter(
                (article) =>
                  article.category === category.title
              )
              .slice(0, 3);

            return (
              <section
                className="section posts-entry"
                key={category.title}
              >
                <div className="container">
                  <SectionHeader
                    title={category.title}
                    link={category.route}
                  />

                  {categoryArticles.length > 0 ? (
                    <div className="row">
                      {categoryArticles.map((article) => (
                        <div
                          className="col-md-6 col-lg-4 mb-4"
                          key={article.id}
                        >
                          <ArticleCard
                            id={article.id}
                            image={article.image_url}
                            date={formatDate(
                              article.created_at
                            )}
                            title={article.title}
                            description={
                              article.short_description
                            }
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>
                      No articles in this category yet.
                    </p>
                  )}
                </div>
              </section>
            );
          })}
        </>
      )}
    </>
  );
}

export default Home;