export default {
  title: "Breakfast",
  items: [
    {
      title: "Guacamola Omelette",
      description:
        "Fresh guacamola, sauteed mushrooms, diced tomatoes and Swiss cheese",
      price: 14.25,
      image: "/food/guacamola-omelette.jpg",
      options: [
        {
          title: "Would you like to add some meat in your Omelette?",
          slug: "Meat Type",
          values: [
            {
              value: "No",
              extra: 1.5,
            },
          ],
        },
      ],
    },
  ],
};
