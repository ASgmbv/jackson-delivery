import Menu from "../components/Menu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { sections } from "../assets/data/data";

export default function Home({ products }) {
  return (
    <>
      <Header />
      <Banner />
      <Menu sections={sections} />
    </>
  );
}

// menu -> submenus
// sections

// export const getStaticProps = async () => {
//   const BASE_URL = "https://api.trello.com/1";
//   const BOARD_ID = "xjhdOnDx";
//   const TRELLO_KEY = "930e28f51398656200efdbdc9d0ad0cb";
//   const TRELLO_TOKEN =
//     "67175ffe747f91e5a650b21c13a32db52e910a76240164423533944e97af72b8";
//   const PRICE_CUSTOM_FIELD_ID = "5f33f8266e56c349848464f0";

//   let lists = await fetch(
//     `${BASE_URL}/boards/${BOARD_ID}/lists?fields=name&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   lists = await lists.json();

//   let temp = lists.map(async (list, index) => {
//     let items = await fetch(
//       `${BASE_URL}/lists/${list.id}/cards?fields=name&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}&attachments=cover&attachment_fields=url&customFieldItems=true`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     items = await items.json();

//     items = items.map(({ id, name, attachments, customFieldItems }) => {
//       const priceField = customFieldItems.find(
//         (field) => field.idCustomField === PRICE_CUSTOM_FIELD_ID
//       );
//       const price = priceField?.value?.number || 0;

//       return {
//         id,
//         name,
//         price,
//         image: attachments[0]?.url || "/placeholder.png",
//       };
//     });

//     list.items = items;
//     return list;
//   });

//   temp = await Promise.all(temp);

//   return {
//     props: {
//       products: lists,
//     },
//   };
// };
