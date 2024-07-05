import React from "react";
import Layout from "../../components/Layout";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({data}:PageProps<Queries.ProductQueryQuery>) {
    const img = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)
  
    return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage image={img!} alt={data.contentfulStickerPack?.name!} />
      <h2>{data.contentfulStickerPack?.name}</h2>
      <h4>{data.contentfulStickerPack?.price}</h4>
    </Layout>
  );
}

export const query = graphql`
  query ProductQuery($id: String!) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData
      }
    }
  }
`;
