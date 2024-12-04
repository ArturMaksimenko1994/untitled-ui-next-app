import { BASE_URL_GRAPHQL } from "./api-config";
import { GET_ALL_POSTS_NEWS } from '@/graphql/queries/get-all-post-news';
import { GET_POST_NEWS_ID } from '@/graphql/queries/get-post-news-id';

import { Post } from "@/lib/types"

export async function fetchAllPostNews(): Promise<Post[]> {
    const query = GET_ALL_POSTS_NEWS.loc?.source.body || ''; // Получаем строку GraphQL запроса

    try {
        const res = await fetch(BASE_URL_GRAPHQL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }

        const { data } = await res.json();

        const DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || 'http://localhost:3100';

        const posts: Post[] = data.posts.nodes.map((rawPost: any) => ({
            id: rawPost.id,
            slug: rawPost.slug,
            title: rawPost.title,
            description: rawPost.excerpt || '',
            imageSrc: rawPost.featuredImage?.node?.sourceUrl || '',
            author: rawPost.author?.node?.name || 'Неизвестный автор',
            link: `${DOMAIN}/news/${rawPost.slug}`,
            createdAt: rawPost.date || '',
            tags: rawPost.tags || [],
        }));

        return posts;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return [];
    }
}

export async function fetchPostNewsId(slug: string) {
    const query = GET_POST_NEWS_ID.loc?.source.body || ''; // Получаем строку GraphQL запроса

    try {
        const res = await fetch(BASE_URL_GRAPHQL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { id: slug, idType: 'SLUG' }, // Передаем slug для поиска по нему
            }),
        });

        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }

        const { data } = await res.json();

        if (!data || !data.post) {
            throw new Error('Пост не найден');
        }

        const post = {
            id: data.post.id,
            slug: data.post.slug,
            title: data.post.title,
            description: data.post.excerpt || '',
            imageSrc: data.post.featuredImage?.node?.sourceUrl || '',
            author: data.post.author?.node?.name || 'Неизвестный автор',
            createdAt: data.post.date || '',
            content: data.post.content || '',
            tags: data.post.tags || [],
        };

        return post;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return null;
    }
}