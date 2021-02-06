/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Text,
  Flex,
  chakra,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
} from "@chakra-ui/react";
import useCartStore from "../utils/hooks/useCartStore";
import Cart from "./Cart/Cart";
import Link from "next/link";
import NextImage from "next/image";
import React from "react";
import Bag from "../assets/icons/Bag";
import Head from "next/head";

const itemsSelector = (state) => state.items;

const Header = ({ restaurant, withCart = true }) => {
  const items = useCartStore(itemsSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Jackson Hole Online Orders</title>
      </Head>
      <chakra.header
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="2"
        width="full"
        borderBottom="1px solid"
        borderBottomColor="gray.100"
        bg="white"
        boxShadow="sm"
      >
        <Flex flexDir="column">
          <Flex bg="black">
            <Container maxW="7xl" mx="auto" d="flex" alignItems="center">
              <Text
                fontWeight="500"
                fontSize={["xs", null, "sm"]}
                color="white"
              >
                tianguberabdurahman@gmail.com
              </Text>
            </Container>
          </Flex>
          <Container
            maxW="7xl"
            height={["3rem", null, "4rem"]}
            mx="auto"
            d="flex"
            alignItems="center"
          >
            <Link href="/" passHref>
              <a>
                <Flex alignItems="center">
                  <NextImage
                    src="/taxi.png"
                    alt="Logo"
                    height="50px"
                    width="50px"
                  />
                  <Text
                    fontSize="xl"
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
              <Text fontWeight="500" fontSize={["xs", null, "sm"]}>
                (307) 264-8232
              </Text>
              <Text fontSize={["0.625rem", null, "sm"]} color="gray.500">
                available 24 / 7
              </Text>
            </Flex>
            {withCart && (
              <>
                <Box position="relative" onClick={onOpen}>
                  <Bag />
                  {items.length > 0 && (
                    <Text
                      as="span"
                      position="absolute"
                      borderRadius="50%"
                      right="0.75rem"
                      top="0.75rem"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      height="1rem"
                      backgroundColor="black"
                      color="white"
                      width="1rem"
                      fontSize="xs"
                    >
                      {items.length}
                    </Text>
                  )}
                </Box>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                  <DrawerOverlay>
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader
                        borderBottom="1px solid"
                        borderColor="gray.200"
                      >
                        <Heading size="sm">My Cart</Heading>
                      </DrawerHeader>
                      <DrawerBody>
                        <Cart restaurant={restaurant} />
                      </DrawerBody>
                    </DrawerContent>
                  </DrawerOverlay>
                </Drawer>
              </>
            )}
          </Container>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Header;
