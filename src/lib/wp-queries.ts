export const GET_SITE_INFO = /* GraphQL */ `
  query SiteInfo {
    generalSettings {
      title
      description
    }
  }
`;

// If WooCommerce + WPGraphQL for WooCommerce are installed, this will work.
// Otherwise, change to a posts query or keep this as a placeholder.
export const GET_PRODUCTS = /* GraphQL */ `
  query Products($first: Int = 10) {
    products(first: $first) {
      nodes {
        id
        slug
        name
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = /* GraphQL */ `
  query ProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      slug
      name
      description
      image {
        sourceUrl
        altText
      }
    }
  }
`;
