import React from "react";
import { Box, Center, HStack, Image, Text, VStack } from "native-base";
function Footer() {
  return (
    <Box
      backgroundColor={"amber.100"}
      borderTopRadius={"3xl"}
      shadow={6}
      width={"100%"}
      marginTop={2}
      height={"full"}
      paddingTop={4}
    >
      <HStack>
        <VStack width={"33%"} padding={2}>
          <Center>
            <Image
              source="https://res.cloudinary.com/ipwesix/image/upload/v1658852806/dummy%20images%20for%20sambhav/logo_nepcqu.png"
              size={"10"}
              alt={"alt"}
            />
            <VStack>
              <Text bold>SAMBHAV</Text>
              <Text fontWeight={"light"} fontSize={"xs"}>
                SHG के साथ
              </Text>
            </VStack>
            <Text
              display={["none", "block"]}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Microfinance is only successful model reaching the poor to uplift
              them by providing easy loan to build their business and other
            </Text>
            <HStack textAlign={"center"} marginTop={4}>
              Instagram | FB | Twitter
            </HStack>
          </Center>
        </VStack>
        <VStack width={"33%"} padding={2}>
          <Center>
            <Text textAlign={"center"} bold underline>
              {" "}
              SAMBHAV FOR SHGS
            </Text>
            <Text textAlign={"center"}>ABOUT Us</Text>
            <Text textAlign={"center"}>FAQ</Text>
            <Text textAlign={"center"}>Terms and Conditions</Text>
            <Text textAlign={"center"} bold>
              Contact{" "}
            </Text>
            <Text textAlign={"center"}>1800 - 123 - 4256 </Text>
            <Text textAlign={"center"}>
              info@sambhav.com Kolpakalala Market, Night Street Delhi - 6410001
            </Text>
          </Center>
        </VStack>
        <VStack width={"33%"} padding={2}>
          <Center>
            <Image
              marginTop={4}
              src="https://down.imgspng.com/download/0720/coat_arms_india_PNG17.png"
              size={"sm"}
              height={["20", "24"]}
              w={["10", "20"]}
              alt={"alt"}
            ></Image>
            <Text textAlign={"center"}>
              Department of agriculture and rural development Delhi, India
            </Text>
          </Center>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Footer;
