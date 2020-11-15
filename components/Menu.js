/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Heading, Grid, Flex, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { RichText } from "prismic-reactjs";

const Menu = ({ sections = [] }) => {
  return (
    <Stack spacing="16">
      {sections.map((section, index) => (
        <SubMenu key={index} section={section} />
      ))}
    </Stack>
  );
};

const SubMenu = ({ section }) => {
  let { title = "", items = [] } = section;

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading as="h2" fontSize="2xl" fontWeight="600" my="6">
        {title.toUpperCase()}
      </Heading>

      <Grid
        templateColumns={["1fr", null, "repeat(4, 1fr)"]}
        gridRowGap="12"
        gridColumnGap="8"
      >
        {items.map((item, index) => {
          let options = item.data.body.map((e) => {
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

          return (
            <MenuItem
              key={"menu-item-" + index}
              title={RichText.asText(item.data.title)}
              description={RichText.asText(item.data.description)}
              price={item.data.price}
              image={item.data.image.url}
              options={options}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Menu;
