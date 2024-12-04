import Link from "next/link";
import styles from "./ArticleNews.module.scss"
import Image from 'next/image';

interface IProps {
  link: string;
  title: string;
  description: string;
  imageSrc?: string;
  alt: string;
  author?: string;
  date: string;
  tags?: string[];
}

const ArticleNews = ({
  link,
  title,
  description,
  imageSrc,
  alt,
  author,
  date,
  tags,
}: IProps) => {

  const defaultImage = '/img/post/no-image.webp';

  return (
    <article className={styles.article}>
      
      <Link className={styles.article__link} href={`${link}`} />

      <Image
        className={styles.article__picture}
        src={imageSrc || defaultImage}
        alt={alt}
        width={384}
        height={240}
      />

      <div className={styles.article__info}>
        <span className={styles.article__author}>{author}</span>
        <hr />
        <span className={styles.article__date}>{date}</span>
      </div>

      <h2 className={styles.article__title}>{title}</h2>
      <p className={styles.article__description}>{description}</p>

      <div className={styles.article__marker}>
        <span className={styles.article__tag}>{tags}</span>
      </div>
    </article>
  );
};

export default ArticleNews;