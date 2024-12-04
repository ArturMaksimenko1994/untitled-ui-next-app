import { gql } from '@apollo/client';

export const GET_ALL_POSTS_NEWS = gql`
  query GetAllPostNews {
    posts {
      nodes {
        id
        slug
        date
        title
        author {
          node {
            name
          }
        }
        excerpt
        featuredImage {
          node {
            sourceUrl(size: MEDIUM_LARGE)
            altText
          }
        }
      }
    }
  }
`;