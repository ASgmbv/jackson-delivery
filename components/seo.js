import { NextSeo } from "next-seo";

const SEO = ({ title, description = "Jackson Hole Delivery" }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      titleTemplate={"%s - Jackson Hole Online Delivery"}
    />
  );
};

export default SEO;
