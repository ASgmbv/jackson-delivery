import { Box, Container, Image } from "@chakra-ui/core";

const Banner = (params) => {
  return (
    <Container maxW="xl">
      <Image
        src="/banner.jpeg"
        boxShadow="rgba(115, 121, 140, 0.5) 0px 5px 15px -5px"
        borderRadius="20px"
        my="30px"
      />
    </Container>
  );
};

export default Banner;
