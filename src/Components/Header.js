import React from "react";
import { Link } from "react-router-dom";
import {
  Text,
  HStack,
  Box,
  Image,
  Menu,
  Pressable,
  HamburgerIcon,
  VStack,
} from "native-base";

function Header() {
  return (
    <Box
      zIndex={1}
      backgroundColor={"white"}
      px={4}
      width={"100%"}
      shadow={"8"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      //   opacity={"90%"}
      //   position={"absolute"}
      //   zIndex={1}
    >
      <Box flexDir={"row"} justifyContent={"space-evenly"}>
        <Image
          marginTop={2}
          marginBottom={2}
          source="https://res.cloudinary.com/ipwesix/image/upload/v1658852806/dummy%20images%20for%20sambhav/logo_nepcqu.png"
          size={"10"}
          alt={"alt"}
        />
        <VStack padding={2} margin={"auto"}>
          <Text bold>SAMBHAV</Text>
          <Text fontWeight={"light"} fontSize={"xs"}>
            SHG के साथ
          </Text>
        </VStack>
      </Box>

      <HStack
        padding={2}
        marginTop={"auto"}
        marginBottom={"auto"}
        display={["none", "content"]}
        space={6}
      >
        <Link to="/">
          <Text bold>HomePage</Text>
        </Link>
        <Link to="/products">
          <Text bold>Products</Text>
        </Link>
        <Link to="/education">
          <Text bold>SHG Info</Text>
        </Link>
        {/* <Link to="/contactUs">
          <Text bold>Contact Us</Text>
        </Link> */}
        <Link to="/login">
          <Text bold>Register</Text>
        </Link>
      </HStack>
      <Box
        display={["content", "none"]}
        marginTop={"auto"}
        marginBottom={"auto"}
      >
        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <HamburgerIcon size={"xl"} />
              </Pressable>
            );
          }}
        >
          <Menu.Item>HomePage</Menu.Item>
          <Menu.Item>Products</Menu.Item>
          <Menu.Item>Education</Menu.Item>
          <Menu.Item>
            {/* <Link to="/education">
              <Text bold>SHG Info</Text>
            </Link> */}
          </Menu.Item>
          <Menu.Item>
            {/* <Link to="/login">
              <Text bold>Register</Text>
            </Link> */}
          </Menu.Item>
        </Menu>
      </Box>
    </Box>
  );
}

export default Header;
