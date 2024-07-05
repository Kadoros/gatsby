import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Seo({ title }: { title: string }) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);
  return <title>{title} | {data.site?.siteMetadata?.title}</title>;
}
