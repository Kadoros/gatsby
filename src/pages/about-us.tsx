import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutUs: React.FC = () => {
  return (
    <Layout title="About Us">
      <div>
        <p>About Us sdads</p>
      </div>
    </Layout>
  );
};

export default AboutUs;

export const Head = () => <Seo title="About Us"/>;