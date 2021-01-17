import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export async function fetchRestaurants() {
  let restaurants = await Client().query(
    Prismic.Predicates.at("document.type", "restaurant"),

    { orderings: "[document.first_publication_date]" }
  );

  restaurants = restaurants.results.map((restaurant) => {
    return {
      id: restaurant.id,
      uid: restaurant.uid,
      name: restaurant.data.name,
      description: restaurant.data.description,
      image: restaurant.data.image?.url,
      workingHours: restaurant.data.working_hours,
    };
  });

  return restaurants;
}

export async function fetchRestaurantByUid({ restaurantUid }) {
  const restaurant = await Client().getByUID("restaurant", restaurantUid);
  return {
    id: restaurant.id,
    uid: restaurant.uid,
    name: restaurant.data.name,
    description: restaurant.data.description,
    image: restaurant.data.image.url,
    workingHours: restaurant.data.working_hours,
  };
}

export async function fetchProductsByRestaurant({ restaurantId }) {
  let menu = [];
  let tags = [];

  let response;

  let page = 1;

  do {
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "product"),
        Prismic.Predicates.at("my.product.restaurant", restaurantId),
      ],
      {
        page,
      }
    );

    response.results.map((product) => {
      const sectionItemOptions = product?.data?.body?.map((e) => {
        if (e.slice_type === "option") {
          return {
            title: RichText.asText(e.primary.option_title),
            slug: RichText.asText(e.primary.option_slug),
            values: e.items.map((e) => {
              return {
                value: RichText.asText(e.option_name),
                extra: e.option_extra,
              };
            }),
          };
        }
      });

      const sectionItem = {
        title: RichText.asText(product.data.title),
        price: product.data.price,
        image: product.data.image.url || null,
        description: RichText.asText(product.data.description),
        options: sectionItemOptions,
      };

      let sectionTitle = product.tags[0];

      if (!tags.includes(sectionTitle)) {
        tags.push(sectionTitle);
        menu.push({
          title: sectionTitle,
          items: [sectionItem],
        });
      } else {
        let section = menu.find((subMenu) => subMenu.title === sectionTitle);
        section.items.push(sectionItem);
      }
      return product;
    });

    console.dir("page: " + response.page, { depth: null });

    page++;
  } while (response.next_page);
  return menu;
}
