import { useEffect, useState } from "react";

import { getAllArticles } from "../../services/articleService.js";

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
        const data = await getAllArticles(controller.signal);

        setArticles(data);
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
      <section className="section home-hero">
        <div className="content-container home-hero-layout">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Learn. Share. Print Better.</h1>

            <p className="home-hero-description">
              PrintForge is a 3D printing community for sharing practical
              guides, printer knowledge, filament tips, print settings,
              troubleshooting and creative projects.
            </p>
          </div>

          <div className="home-hero-image-wrapper">
            <img
              src="/images/hero/3d-printing-hero.png"
              alt="3D printing workspace"
              className="home-hero-image"
            />
          </div>
        </div>
      </section>

      {isLoading && (
        <section className="section">
          <div className="content-container">
            <p>Loading articles...</p>
          </div>
        </section>
      )}

      {error && (
        <section className="section">
          <div className="content-container">
            <h2>Unable to load articles</h2>
            <p>{error}</p>
          </div>
        </section>
      )}

      {!isLoading && !error && (
        <>
          {featuredArticles.length > 0 && (
            <section className="section">
              <div className="content-container">
                <SectionHeader title="Latest Articles" link="/articles" />

                <div className="featured-articles-grid retro-layout">
                  {featuredArticles.map((article) => (
                    <div className="featured-article-item" key={article.id}>
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
              .filter((article) => article.category === category.title)
              .slice(0, 3);

            return (
              <section className="section" key={category.title}>
                <div className="content-container">
                  <SectionHeader title={category.title} link={category.route} />

                  {categoryArticles.length > 0 ? (
                    <div className="article-grid">
                      {categoryArticles.map((article) => (
                        <div className="article-grid-item" key={article.id}>
                          <ArticleCard
                            id={article.id}
                            image={article.image_url}
                            date={formatDate(article.created_at)}
                            title={article.title}
                            description={article.short_description}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No articles in this category yet.</p>
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
