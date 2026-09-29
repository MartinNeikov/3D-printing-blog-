import { useParams } from "react-router";

function EditArticle() {
  const { articleId } = useParams();

  return (
    <section className="section">
      <div className="container">
        <h1>Edit Article</h1>

        <p>Article ID: {articleId}</p>
      </div>
    </section>
  );
}

export default EditArticle;