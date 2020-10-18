// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client } from "../../prismic-configuration";

// export async function fetchPrismic({}) {
//   const data = await Client(req).getSingle('homepage')
//   return data;
// }

export default async (req, res) => {
  const data = await Client(req).getSingle("test");
  console.log({ data });

  res.statusCode = 200;
  res.json({ data });
};
