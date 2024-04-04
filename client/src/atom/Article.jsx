// eslint-disable-next-line react/prop-types
const Article = ({ children }) => {
  return (
    <article className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </article>
  );
};
export default Article;
