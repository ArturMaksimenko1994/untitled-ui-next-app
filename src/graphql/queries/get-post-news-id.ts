import { gql } from '@apollo/client';

export const GET_POST_NEWS_ID = gql`
query GetPostNewsId($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    id
    slug
    title
    excerpt
    date
    content
    author {
      node {
        name
      }
    }
    featuredImage {
      node {
        sourceUrl(size: LARGE)
      }
    }
  }
}
`;