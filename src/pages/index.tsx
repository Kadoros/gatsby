import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Define the IndexPage component
interface IIndexPageProps {
  data: {
    allContentfulStickerPack: {
      nodes: Array<{
        id: string;
        name: string;
        price: number;
        preview?: {
          gatsbyImageData: any;
        };
      }>;
    };
  };
}

export default function IndexPage({ data }: IIndexPageProps) {
  return (
    <Layout title="Welcome to DevSticker">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((Sticker, index) => {
          const imageData = getImage(Sticker.preview?.gatsbyImageData!);
          console.log(`Image Data for ${Sticker.name}:`, imageData); // Log each image data to verify

          return (
            <article key={Sticker.id}>
              {imageData ? (
                <GatsbyImage image={imageData} alt={Sticker.name!} />
              ) : (
                <p>No image available for {Sticker.name}</p>
              )}
              <Link to={`/product/${Sticker.id}`}>
                <h2>{Sticker.name}</h2>
                <h4>{Sticker.price}</h4>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

// Export the component as the default export
export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
