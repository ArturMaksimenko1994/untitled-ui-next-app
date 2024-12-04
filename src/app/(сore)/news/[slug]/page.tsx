import { notFound } from 'next/navigation';
import { fetchPostNewsId } from '@/api/api';
import Image from 'next/image';
import styles from './news-single.module.scss';

interface PageProps {
  params: {
    slug: string;
  };
}

const PageBlogSingle = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await fetchPostNewsId(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className={styles.blog}>
        <div className={styles.blog__header}>
          <div className="container">
            <div className={styles.blog__row}>
              <time
                className={styles.blog__data}
                dateTime={new Date(post.createdAt).toISOString()}
              >
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
              <p className={styles.blog__author}>Автор: {post.author}</p>
              <div className={styles.blog__heading}>
                <h1 className="h2">{post.title}</h1>
                {/* {post.tags?.length ? (
                  post.tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: 5 }}>
                      {tag}
                    </span>
                  ))
                ) : (
                  <span>Нет тегов</span>
                )} */}
              </div>
              {post.imageSrc && (
                <Image
                  className={styles.blog__picture}
                  src={post.imageSrc}
                  alt={post.title}
                  width={1216}
                  height={516}
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.blog__content}>
          <div className="container container--small">
            <div
              className="gutenberg-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <div className={styles.page__bottom}>
          <div className="container"></div>
        </div>
      </section>
    </>
  );
};

export default PageBlogSingle;
