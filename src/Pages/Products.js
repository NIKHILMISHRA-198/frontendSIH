import { Box, Text, Center } from "native-base";
import React from "react";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import "./Products.css";

function Products() {
  return (
    <Box>
      <Box backgroundColor={"white"}>
        <Text
          marginTop={4}
          color={"amber.500"}
          textAlign={"center"}
          fontWeight={600}
          fontSize={["4xl", "8xl"]}
        >
          PRODUCTS
        </Text>
        <SearchBar />
      </Box>
      <Box>
        <Text
          paddingLeft={[4, "10"]}
          fontWeight={"500"}
          fontSize={["xl", "3xl"]}
        >
          Newly added products
        </Text>

        <Center margin={[0, "6"]}>
          <Box
            margin={"auto"}
            flexDir={["col", "row", "row"]}
            flexWrap={"wrap"}
          >
            <Card />
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default Products;
