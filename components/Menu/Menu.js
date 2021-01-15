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
        fontSize={["sm", null, "xl"]}
        fontWeight="600"
        mb="4"
        color="green.600"
        position="sticky"
        top={["3rem", null, "4rem"]}
        bg="white"
        py="2"
        px="1"
        zIndex="1"
        boxShadow="md"
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
