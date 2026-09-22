import ArticleCard from "../components/ArticleCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import SmallArticleItem from "../components/SmallArticleItem.jsx";
import LargeArticleCard from "../components/LargeArticleCard.jsx";
import AuthorArticleCard from "../components/AuthorArticleCard.jsx";
import FeaturedProjectCard from "../components/FeaturedProjectCard.jsx";
import FeaturedArticleCard from "../components/FeaturedArticleCard.jsx";

function Home() {
  const printSettingsArticles = [
    {
      id: 1,
      image: "/images/img_7_horizontal.jpg",
      title: "How to Choose the Right Layer Height",
      authorImage: "/images/person_1.jpg",
      author: "David Anderson",
      date: "Sep. 22, 2026",
      description:
        "Learn how layer height affects print quality, speed and the overall finish of your 3D prints.",
    },
    {
      id: 2,
      image: "/images/img_6_horizontal.jpg",
      title: "Best Infill Settings for Strong 3D Prints",
      authorImage: "/images/person_2.jpg",
      author: "David Anderson",
      date: "Sep. 21, 2026",
      description:
        "A practical guide to infill percentage and patterns for everyday parts and functional prints.",
    },
    {
      id: 3,
      image: "/images/img_5_horizontal.jpg",
      title: "Print Speed vs Quality: Finding the Balance",
      authorImage: "/images/person_3.jpg",
      author: "David Anderson",
      date: "Sep. 20, 2026",
      description:
        "Understand how print speed affects surface quality, accuracy and reliability.",
    },
    {
      id: 4,
      image: "/images/img_4_horizontal.jpg",
      title: "How Many Walls Do You Really Need?",
      authorImage: "/images/person_4.jpg",
      author: "David Anderson",
      date: "Sep. 19, 2026",
      description:
        "Learn how wall count influences strength, print time and material usage.",
    },
    {
      id: 5,
      image: "/images/img_3_horizontal.jpg",
      title: "First Layer Settings for Better Adhesion",
      authorImage: "/images/person_5.jpg",
      author: "David Anderson",
      date: "Sep. 18, 2026",
      description:
        "Improve first layer adhesion by adjusting speed, temperature and layer height.",
    },
    {
      id: 6,
      image: "/images/img_2_horizontal.jpg",
      title: "When Should You Use Supports?",
      authorImage: "/images/person_4.jpg",
      author: "David Anderson",
      date: "Sep. 17, 2026",
      description:
        "Find out when supports are necessary and how to reduce marks on the finished model.",
    },
  ];
  return (
    <>
      {/* Start featured articles */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <div className="col-md-4">
              <FeaturedArticleCard
                image="/images/img_2_horizontal.jpg"
                date="Sep. 22nd, 2026"
                title="How to Get Better Print Quality from Your 3D Printer"
                className="h-entry mb-30 v-height gradient"
              />

              <FeaturedArticleCard
                image="/images/img_5_horizontal.jpg"
                date="Sep. 21st, 2026"
                title="7 Common 3D Printing Problems and How to Fix Them"
                className="h-entry v-height gradient"
              />
            </div>

            <div className="col-md-4">
              <FeaturedArticleCard
                image="/images/img_1_vertical.jpg"
                date="Sep. 22nd, 2026"
                title="Beginner's Guide to FDM 3D Printing"
                className="h-entry img-5 h-100 gradient"
              />
            </div>

            <div className="col-md-4">
              <FeaturedArticleCard
                image="/images/img_3_horizontal.jpg"
                date="Sep. 20th, 2026"
                title="PLA vs PETG: Which Material Should You Start With?"
                className="h-entry mb-30 v-height gradient"
              />

              <FeaturedArticleCard
                image="/images/img_4_horizontal.jpg"
                date="Sep. 19th, 2026"
                title="How to Improve First Layer Adhesion"
                className="h-entry v-height gradient"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End featured articles */}
      {/* Start posts-entry */}
      <section className="section posts-entry">
        <div className="container">
          <SectionHeader title="3D Printers" />
          <div className="row g-3">
            <div className="col-md-9">
              <div className="row g-3">
                <div className="col-md-6">
                  <LargeArticleCard
                    image="/images/img_1_sq.jpg"
                    date="Sep. 22nd, 2026"
                    title="Bambu Lab P1S: Fast CoreXY Printing for Everyday Use"
                    description="A closer look at speed, print quality, enclosed printing and what makes the P1S a strong all-round 3D printer."
                  />
                </div>

                <div className="col-md-6">
                  <LargeArticleCard
                    image="/images/img_2_sq.jpg"
                    date="Sep. 21st, 2026"
                    title="How to Choose Your First 3D Printer"
                    description="Learn what to look for in build volume, print speed, materials, maintenance and ease of use before buying."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled blog-entry-sm">
                <SmallArticleItem
                  date="Sep. 22nd, 2026"
                  title="Bambu Lab P1S: Is It Still Worth It?"
                  description="A practical look at speed, print quality and everyday usability."
                />

                <SmallArticleItem
                  date="Sep. 20th, 2026"
                  title="CoreXY vs Bed Slinger: What Is the Difference?"
                  description="Learn how the two printer designs differ in speed, stability and print quality."
                />

                <SmallArticleItem
                  date="Sep. 18th, 2026"
                  title="5 Things to Check Before Buying Your First 3D Printer"
                  description="Important features to consider before choosing your first machine."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End posts-entry */}
      {/* Start posts-entry */}
      <section className="section posts-entry posts-entry-sm bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <ArticleCard
                image="/images/img_1_horizontal.jpg"
                date="Sep. 22nd, 2026"
                title="Best 3D Printer Upgrades for Better Print Quality"
                description="Simple upgrades that can improve reliability, cooling, adhesion and everyday printing."
              />
            </div>

            <div className="col-md-6 col-lg-3">
              <ArticleCard
                image="/images/img_2_horizontal.jpg"
                date="Sep. 21st, 2026"
                title="How to Reduce Stringing in FDM Prints"
                description="Learn how temperature, retraction and filament moisture can affect stringing."
              />
            </div>

            <div className="col-md-6 col-lg-3">
              <ArticleCard
                image="/images/img_3_horizontal.jpg"
                date="Sep. 20th, 2026"
                title="Common First Layer Problems and How to Fix Them"
                description="A practical guide to bed leveling, nozzle height and first layer adhesion."
              />
            </div>

            <div className="col-md-6 col-lg-3">
              <ArticleCard
                image="/images/img_4_horizontal.jpg"
                date="Sep. 19th, 2026"
                title="PLA, PETG or ASA: Which Material Should You Use?"
                description="Compare the most common materials and choose the right one for your next project."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End posts-entry */}
      {/* Start posts-entry */}
      <section className="section posts-entry">
        <div className="container">
          <SectionHeader title="Filaments" />
          <div className="row g-3">
            <div className="col-md-9 order-md-2">
              <div className="row g-3">
                <div className="col-md-6">
                  <LargeArticleCard
                    image="/images/img_1_sq.jpg"
                    date="Sep. 22nd, 2026"
                    title="PLA vs PETG: Which Filament Should You Choose?"
                    description="A practical comparison of strength, printability, temperature resistance and common uses."
                  />
                </div>

                <div className="col-md-6">
                  <LargeArticleCard
                    image="/images/img_2_sq.jpg"
                    date="Sep. 20th, 2026"
                    title="How to Store Filament and Keep It Dry"
                    description="Learn how moisture affects print quality and how to store filament properly between prints."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled blog-entry-sm">
                <SmallArticleItem
                  date="Sep. 22nd, 2026"
                  title="PLA vs PETG: Which Filament Is Better for Beginners?"
                  description="Compare ease of printing, strength, temperature resistance and common uses."
                />

                <SmallArticleItem
                  date="Sep. 20th, 2026"
                  title="Why Wet Filament Causes Poor Print Quality"
                  description="Learn how absorbed moisture can lead to stringing, bubbles and weak layer adhesion."
                />

                <SmallArticleItem
                  date="Sep. 18th, 2026"
                  title="When Should You Use ASA Instead of PLA?"
                  description="A quick guide to choosing ASA for stronger, heat-resistant and outdoor parts."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="Print Settings" />
          <div className="row">
            {printSettingsArticles.map((article) => (
              <div className="col-lg-4 mb-4" key={article.id}>
                <AuthorArticleCard
                  image={article.image}
                  title={article.title}
                  authorImage={article.authorImage}
                  author={article.author}
                  date={article.date}
                  description={article.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section bg-light">
        <div className="container">
          <SectionHeader title="Projects" />

          <div className="row align-items-stretch retro-layout-alt">
            <div className="col-md-5 order-md-2">
              <FeaturedProjectCard
                image="/images/img_2_vertical.jpg"
                date="Sep. 22, 2026"
                title="Modular Desk Organizer You Can 3D Print at Home"
                className="hentry img-1 h-100 gradient"
              />
            </div>

            <div className="col-md-7">
              <FeaturedProjectCard
                image="/images/img_1_horizontal.jpg"
                date="Sep. 21, 2026"
                title="How to Design and Print a Replacement Gear"
                className="hentry img-2 v-height mb30 gradient"
                textClassName="text-sm"
              />

              <div className="two-col d-block d-md-flex justify-content-between">
                <FeaturedProjectCard
                  image="/images/img_2_sq.jpg"
                  date="Sep. 20, 2026"
                  title="Simple Wall Mount Project for Beginners"
                  className="hentry v-height img-2 gradient"
                  textClassName="text-sm"
                />

                <FeaturedProjectCard
                  image="/images/img_3_sq.jpg"
                  date="Sep. 19, 2026"
                  title="Create a Two-Color 3D Printed Keychain"
                  className="hentry v-height img-2 ms-auto float-end gradient"
                  textClassName="text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
