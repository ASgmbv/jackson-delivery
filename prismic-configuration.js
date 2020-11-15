import Prismic from "prismic-javascript";

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(
    "https://jackson-delivery.cdn.prismic.io/api/v2",
    createClientOptions(req, process.env.PRISMIC_ACCESS_TOKEN)
  );

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
