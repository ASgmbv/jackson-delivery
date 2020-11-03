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
            {
              value: "Diced Bacon",
              extra: 1.5,
            },
            {
              value: "Diced Ham",
              extra: 1.5,
            },
            {
              value: "Diced Sausage",
              extra: 1.5,
            },
            {
              value: "Diced Turkey",
              extra: 1.5,
            },
          ],
        },
        {
          title:
            "Would you like to substitute guacamola for any other vegetables?",
          slug: "Guacamola Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Guacamola - Broccoli",
              extra: 0,
            },
            {
              value: "No Guacamola - Fresh Onions",
              extra: 0,
            },
            {
              value: "No Guacamola - Fresh Spinach",
              extra: 0,
            },
            {
              value: "No Guacamola - Sauteed Spinach",
              extra: 0,
            },
            {
              value: "No Guacamola - Green Peppers",
              extra: 0,
            },
            {
              value: "No Guacamola - Green Chillies",
              extra: 0,
            },
            {
              value: "No Guacamola at all",
              extra: 0,
            },
          ],
        },
        {
          title: "How would you like your Hash Brown to be cooked?",
          slug: "Hash Brown",
          values: [
            {
              value: "Crispy Hash Brown",
              extra: 0,
            },
            {
              value: "Regular Hash Brown",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute your O.S.M (Oats,Sunflower Seeds and Millet) Bread for any other type for additional charge?",
          slug: "Bread Type",
          values: [
            {
              value: "Cinnamon Bread",
              extra: 1.25,
            },
            {
              value: "Cinnamon Raisin Bread",
              extra: 1.25,
            },
            {
              value: "Butter Croissant",
              extra: 1.75,
            },
            {
              value: "White Bread",
              extra: 1.25,
            },
            {
              value: "Rustic Rye Bread",
              extra: 0,
            },
          ],
        },
      ],
    },
    {
      title: "Vegetarian Omelette",
      description: "Sauteed mushrooms, diced tomatoes, onions and Swiss cheese",
      price: 14,
      image: "/food/vegetarian-omelette.jpg",
      options: [
        {
          title: "Would you like to add some meat in your Omelette?",
          slug: "Meat Type",
          values: [
            {
              value: "No",
              extra: 1.5,
            },
            {
              value: "Diced Bacon",
              extra: 1.5,
            },
            {
              value: "Diced Ham",
              extra: 1.5,
            },
            {
              value: "Diced Sausage",
              extra: 1.5,
            },
            {
              value: "Diced Turkey",
              extra: 1.5,
            },
          ],
        },
        {
          title: "Would you like to substitute Swiss cheese for another type ?",
          slug: "Cheese Type",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Swiss cheese - substitute for Cheddar cheese",
              extra: 0,
            },
            {
              value: "No Swiss cheese - substitute for Pepper Jack cheese",
              extra: 0,
            },
            {
              value: "No Cheese at all",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute tomatoes for any other vegetables?",
          slug: "Tomatoes Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Broccoli",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Green Peppers",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Green Chilies",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Fresh Spinach",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Sautéed Spinach",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Jalapeños",
              extra: 0,
            },
            {
              value: "No Tomatoes at all",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute onions for any other vegetables?",
          slug: "Onions Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Onions - substitute for Broccoli",
              extra: 0,
            },
            {
              value: "No Onions - substitute Green Peppers",
              extra: 0,
            },
            {
              value: "No Onions - substitute for Green Chilies",
              extra: 0,
            },
            {
              value: "No Onions - substitute for Fresh Spinach",
              extra: 0,
            },
            {
              value: "No Onions - substitute for Sautéed Spinach",
              extra: 0,
            },
            {
              value: "No Onions - substitute for Jalapeños",
              extra: 0,
            },
            {
              value: "No Onions at all ",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute Mushrooms for any other vegetables?",
          slug: "Mushrooms Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Mushrooms - substitute for Broccoli",
              extra: 0,
            },
            {
              value: "No Mushrooms - substitute for Green Peppers",
              extra: 0,
            },
            {
              value: "No Mushrooms - substitute for Green Chilies",
              extra: 0,
            },
            {
              value: "No Mushrooms- substitute for Fresh Spinach",
              extra: 0,
            },
            {
              value: "No Mushrooms- substitute for Sautéed Spinach",
              extra: 0,
            },
            {
              value: "No Mushrooms- substitute for Jalapeños",
              extra: 0,
            },
            {
              value: "No Mushrooms at all",
              extra: 0,
            },
          ],
        },
        {
          title: "How would you like your Hash Brown to be cooked?",
          slug: "Hash Brown",
          values: [
            {
              value: "Crispy Hash Brown",
              extra: 0,
            },
            {
              value: "Regular Hash Brown",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute your O.S.M (Oats,Sunflower Seeds and Millet) Bread for any other type for additional charge?",
          slug: "Bread Type",
          values: [
            {
              value: "Cinnamon Bread",
              extra: 1.25,
            },
            {
              value: "Cinnamon Raisin Bread",
              extra: 1.25,
            },
            {
              value: "Butter Croissant",
              extra: 1.75,
            },
            {
              value: "White Bread",
              extra: 1.25,
            },
            {
              value: "Rustic Rye Bread",
              extra: 0,
            },
          ],
        },
      ],
    },
    {
      title: "Bacon Omelette, Jackson Favorite",
      description:
        "Melted cheddar cheese, luscious diced bacon and fresh diced tomato",
      price: 14.75,
      image: "/food/omelette.jpg",
      options: [
        {
          title: "Would you like to substitute cheddar to any other cheese?",
          slug: "Cheddar Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Cheddar - substitute for Swiss cheese",
              extra: 0,
            },
            {
              value: "No Cheddar - substitute for Pepper Jack cheese",
              extra: 0,
            },
          ],
        },
        {
          title: "Would you like to substitute bacon?",
          slug: "Bacon Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No bacon - substitute for Ham",
              extra: 0,
            },
            {
              value: "No bacon - substitute for Sausage",
              extra: 0,
            },
            {
              value: "No bacon - substitute for Turkey",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute tomatoes for any other vegetables?",
          slug: "Tomatoes Substitute",
          values: [
            {
              value: "No",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Broccoli",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Green Peppers",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Green Chilies",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Fresh Spinach",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Sautéed Spinach",
              extra: 0,
            },
            {
              value: "No Tomatoes - substitute for Jalapeños",
              extra: 0,
            },
            {
              value: "No Tomatoes at all",
              extra: 0,
            },
          ],
        },
        {
          title: "How would you like your Hash Brown to be cooked?",
          slug: "Hash Brown",
          values: [
            {
              value: "Crispy Hash Brown",
              extra: 0,
            },
            {
              value: "Regular Hash Brown",
              extra: 0,
            },
          ],
        },
        {
          title:
            "Would you like to substitute your O.S.M (Oats,Sunflower Seeds and Millet) Bread for any other type for additional charge?",
          slug: "Bread Type",
          values: [
            {
              value: "Cinnamon Bread",
              extra: 1.25,
            },
            {
              value: "Cinnamon Raisin Bread",
              extra: 1.25,
            },
            {
              value: "Butter Croissant",
              extra: 1.75,
            },
            {
              value: "White Bread",
              extra: 1.25,
            },
            {
              value: "Rustic Rye Bread",
              extra: 0,
            },
          ],
        },
      ],
    },
  ],
};
