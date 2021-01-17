/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Heading, Grid, Box, Container, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const Menu = ({ menu = [] }) => {
  return (
    <Container maxW="7xl" my={["3rem", null, "4.5rem"]}>
      <Stack spacing="16" width="100%">
        {menu.map((section, index) => (
          <SubMenu key={index} section={section} />
        ))}
      </Stack>
    </Container>
  );
};

const SubMenu = ({ section: { title, items } }) => {
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
          return <MenuItem key={"menu-item-" + index} data={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Menu;
