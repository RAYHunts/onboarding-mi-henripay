import useFetch from "../../../hooks/useFetch";
import BlogCard from "../BlogCard";
import s from "./BlogContents.module.scss";
import BlogCardSkeleton from "../BlogCardSkeleton/BlogCardSkeleton.component";

type BlogContentProps = {
  title: string;
  content_text: string;
  photo_url: string;
  updated_at: string;
};

interface BlogResponse {
  blogs: BlogContentProps[];
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
}

const BlogContents = () => {
  const { data, error, loading } = useFetch<BlogResponse>("https://api.slingacademy.com/v1/sample-data/blog-posts");

  return (
    <div className="container">
      <div className={s._Container}>
        {loading && Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)}
        {error && <p>Error:</p>}
        {data && data.blogs.length === 0 && <p>No data found</p>}
        {data &&
          data.blogs.map((item: BlogContentProps, i) => {
            return <BlogCard key={i} title={item.title} description={item.content_text} image={item.photo_url} date={item.updated_at} />;
          })}
      </div>
    </div>
  );
};

export default BlogContents;
