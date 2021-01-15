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
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import useCartStore from "../utils/hooks/useCartStore";
import Cart from "./Cart";
import Link from "next/link";
import Logo from "../assets/icons/Logo";
import React from "react";

const itemsSelector = (state) => state.items;

// base: "base",
// sm: "small",
// md: "md",
// lg: "lg",
// xl: "xl",

const Header = ({ isWithCart = true }) => {
  const items = useCartStore(itemsSelector);

  const logoSize = useBreakpointValue({
    base: "60px",
    md: "80px",
  });

  return (
    <chakra.header
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      width="full"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      bg="white"
    >
      <Container
        maxW="7xl"
        height={["3rem", null, "4.5rem"]}
        mx="auto"
        d="flex"
        alignItems="center"
      >
        <Link href="/" passHref>
          <a>
            <Flex alignItems="center">
              <Logo height="50px" width={logoSize} />
              <Text
                fontSize="2xl"
                fontWeight="bold"
                mx={3}
                display={["none", null, "block"]}
              >
                JHONLINEORDER
              </Text>
            </Flex>
          </a>
        </Link>
        <Flex
          flex="1"
          alignItems="flex-start"
          flexDir="column"
          mx={[3, null, 10]}
        >
          <Text fontWeight="500" fontSize={["xs", null, "xl"]}>
            (307) 264-8232
          </Text>
          <Text fontSize={["xs", null, "sm"]} color="gray.500">
            available 24 / 7
          </Text>
        </Flex>

        <Link href="/checkout" passHref>
          <Button
            d={["inline-flex", null, "none"]}
            as="a"
            rightIcon={
              <Box
                sx={{
                  textAlign: "start",
                }}
              >
                | {items.length}
              </Box>
            }
            colorScheme="orange"
            variant="solid"
            size="sm"
          >
            Cart
          </Button>
        </Link>

        {isWithCart ? (
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button
                d={["none", null, "inline-flex"]}
                rightIcon={
                  <Box
                    sx={{
                      // width: "25px",
                      textAlign: "start",
                    }}
                  >
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
    </chakra.header>
  );
};

const H = ({ isWithCart = true }) => {
  const items = useCartStore(itemsSelector);

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
                mx="3"
                display={["none", null, "block"]}
              >
                JHONLINEORDER
              </Text>
            </Flex>
          </a>
        </Link>
        <Flex flex="1" alignItems="flex-start" flexDir="column" mx="10">
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
