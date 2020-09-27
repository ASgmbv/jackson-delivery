import {
  Box,
  Container,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  Flex,
} from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import Cart from "./Cart";
import Link from "next/link";
import Logo from "../assets/icons/Logo";

const itemsSelector = (state) => state.items;

const Header = ({ isWithCart = true }) => {
  const items = useCartStore(itemsSelector);

  console.log({ items });

  return (
    <Flex
      as="section"
      sx={{
        borderBottom: "1px solid",
        borderColor: "gray.100",
      }}
    >
      <Container
        maxW="xl"
        sx={{
          d: "flex",
          height: "64px",
          alignItems: "center",
        }}
      >
        <Link href="/" passHref>
          <a>
            <Flex alignItems="center">
              <Logo style={{ height: "60px", width: "80px" }} />
              <Text
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="Montserrat"
                mx="3"
              >
                JHONLINEORDER
              </Text>
            </Flex>
          </a>
        </Link>
        <Flex flex="1" alignItem="center" flexDir="column" mx="10">
          <Text fontWeight="500">(307) 264-8232</Text>
          <Text fontSize="sm" color="gray.500">
            available 24 / 7
          </Text>
        </Flex>
        {isWithCart ? (
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button
                rightIcon={
                  <Box sx={{ width: "25px", textAlign: "start" }}>
                    | {items.length}
                  </Box>
                }
                colorScheme="orange"
                variant="solid"
              >
                Cart
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <Cart />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Container>
    </Flex>
  );
};

export default Header;
