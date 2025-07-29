import { ContentList } from "@/components/blocks/content-list";
import { getContentPosts } from "@/lib/content";

export function HomePage() {
  const contentPosts = getContentPosts();
  const categories = Array.from(
    new Set(
      contentPosts.map((post) => post.metadata.category || "Uncategorized"),
    ),
  );

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to {`Mr Seb's`} Blog
      </h1>
      <p className="mb-4">
        {`Explore my latest articles, tutorials, and insights on software
        development, technology trends, and more. Whether you're a beginner or
        an experienced developer, there's something here for everyone.`}
      </p>
      {categories.map((category) => (
        <div key={category} className="flex flex-col">
          <h2 className="mb-4 text-xl font-semibold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <ContentList
            key={`cl-${category}`}
            category={category}
            className="mb-12"
          />
        </div>
      ))}
    </section>
  );
}
