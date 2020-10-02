import { Heading, Grid, Flex, Container, Stack } from "@chakra-ui/core";

import MenuItem from "./MenuItem";

const Menu = ({ sections = [] }) => {
  return (
    <Container maxW="xl" as="section">
      <Stack spacing="16">
        {sections.map((section, index) => (
          <SubMenu key={index} section={section} />
        ))}
      </Stack>
    </Container>
  );
};

const SubMenu = ({ section }) => {
  const { title = "", items = [] } = section;

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading as="h2" fontSize="2xl" fontWeight="600" my="6">
        {title}
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gridRowGap="10" gridColumnGap="8">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Menu;