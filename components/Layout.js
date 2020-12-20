/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Container, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import SEO from "../components/seo";

const Layout = ({
  title,
  description,
  children,
  withHeader = true,
  maxW = "7xl",
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header isWithCart={withHeader} />
      <Container maxW={maxW} mt="4.5rem">
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
