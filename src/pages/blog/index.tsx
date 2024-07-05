import * as React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

type BlogProps = PageProps<Queries.BlogPostsQuery>;

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.frontmatter?.slug}`}>
              <h3>{node.frontmatter?.title}</h3>
              <h5>
                {node.frontmatter?.author} in: {node.frontmatter?.category}
              </h5>
              <h6>{node.frontmatter?.date}</h6>
              <hr />
              <p>{node.excerpt}</p>
              <hr />
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          category
          author
          slug
        }
        excerpt(pruneLength: 50)
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
