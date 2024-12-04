import { fetchAllPostNews } from '@/api/api';
import ArticleNews from '@/ui/articles/ArticleNews/ArticleNews';
import styles from './news.module.scss';

const PageBlog = async () => {
  const posts = await fetchAllPostNews();

  return (
    <section className={styles.news}>
      <div className="container">
        <h2 className="h4">Все записи в блоге</h2>
        <div className={styles.news__row}>
          {posts.map((post) => (
            <ArticleNews
              key={post.id}
              link={post.link}
              title={post.title}
              description={post.description}
              imageSrc={post.imageSrc}
              alt={post.title}
              author={post.author}
              date={new Date(post.createdAt).toLocaleDateString()}
              tags={post.tags || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageBlog;
