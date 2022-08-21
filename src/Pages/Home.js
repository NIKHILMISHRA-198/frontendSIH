import { Box, Center, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";

function Home() {
  return (
    <Box>
      <Box width={"100%"}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/ipwesix/image/upload/v1658852658/dummy%20images%20for%20sambhav/Image_2_peabp8.png",
          }}
          alt={"banner image here"}
          height={["200", "500"]}
          width="100%"
        />
        <Text
          position={"absolute"}
          top={["60%", "70%"]}
          left={"4%"}
          zIndex={1}
          bold
          color={"white"}
          fontSize={["sm", "2xl"]}
          fontWeight={"900"}
          width={["50%", "25%"]}
        >
          150+ SHGs in Bihar registered themselves as mdall Bussiness on
          <Text color={"amber.400"}>_Sambhav.com.</Text>
        </Text>
      </Box>
      <SearchBar />

      {/* The features section */}
      <Center>
        <Text
          marginTop={8}
          width={["70%", "40%"]}
          textAlign={"center"}
          fontWeight={["normal"]}
          fontSize={["md", "2xl"]}
        >
          Find the Products the SHG’s around you make, Buy the products
          Handcrafted with Love.
        </Text>
        {/* Features card */}
        <HStack marginTop={10} space={["8", "20"]} flexGrow={"unset"}>
          <VStack>
            <Image
              source={{
                uri: "https://res.cloudinary.com/ipwesix/image/upload/v1658852806/dummy%20images%20for%20sambhav/logo_nepcqu.png",
              }}
              alt={"banner image here"}
              borderRadius={"100"}
              size="md"
            />
            <Text textAlign={"center"} fontWeight={"medium"} fontSize={"lg"}>
              Products
            </Text>
          </VStack>

          <VStack>
            <Image
              source={{
                uri: "https://pmjandhanyojana.co.in/wp-content/uploads/2015/11/self-help-group-accounts.jpg",
              }}
              alt={"banner image here"}
              borderRadius={"100"}
              size="md"
            />
            <Text textAlign={"center"} fontWeight={"medium"} fontSize={"lg"}>
              Locate
            </Text>
          </VStack>

          <VStack>
            <Image
              source={{
                uri: "https://pmjandhanyojana.co.in/wp-content/uploads/2015/11/self-help-group-accounts.jpg",
              }}
              alt={"banner image here"}
              borderRadius={"100"}
              size="md"
            />
            <Text textAlign={"center"} fontWeight={"medium"} fontSize={"lg"}>
              SHG Info
            </Text>
          </VStack>
        </HStack>
      </Center>

      {/* Product Highlights */}

      <Box marginTop={16} shadow={"8"} border={"2px solid"}>
        <Text marginLeft={["4", "16"]} fontSize={["lg", "3xl"]} bold>
          Popular in your Area:
        </Text>
        <Center>
          {/* <Text fontSize={"3xl"}>Popular in your Area:</Text> */}
          <Box flex={"auto"} flexDir={["col", "row", "row"]} flexWrap={"wrap"}>
            <Card />
          </Box>
        </Center>
      </Box>
      {/* The features section */}
    </Box>
  );
}

export default Home;
