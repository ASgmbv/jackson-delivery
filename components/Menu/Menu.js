/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Heading, Grid, Box, Flex, Container, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { RichText } from "prismic-reactjs";

const Menu = ({ sections = [] }) => {
  return (
    <Container maxW="7xl" mt={["3rem", null, "4.5rem"]}>
      <Stack spacing="16" width="100%">
        {sections.map((section, index) => (
          <SubMenu key={index} section={section} />
        ))}
      </Stack>
    </Container>
  );
};

const SubMenu = ({ section }) => {
  let { title = "", items = [] } = section;

  return (
    <Box>
      <Heading
        as="h2"
        size="md"
        maxW="500px"
        fontWeight="600"
        mb="4"
        color="green.600"
      >
        {title.toUpperCase()}
      </Heading>

      <Grid
        templateColumns={[
          null,
          null,
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={4}
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
    </Box>
  );
};

export default Menu;
