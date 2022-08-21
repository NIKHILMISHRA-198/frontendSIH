import { Box, VStack, Text, HStack, Button } from "native-base";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function Card({ prod }) {
  const [product, setProduct] = useState(["lnull"]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/products").then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  return (
    <Box flex={"auto"} flexDir={["col", "row", "row"]} flexWrap={"wrap"}>
      {product.map((prod) => (
        <div key={prod._id}>
          <Box
            border="2"
            borderRadius="md"
            shadow={"6"}
            width={["100%", "240"]}
            margin={4}
          >
            <VStack>
              <Box>
                <img
                  // src={prod.images[0].url}
                  width={["100%"]}
                  alt={"alt"}
                  height="250"
                />
              </Box>
              <Box width={"100"}>
                <HStack maxW={"100"} flexDir={"row"}>
                  <VStack space={2} padding={2}>
                    <Text bold>{prod.name}</Text>
                    <Text color={"red.600"}>{prod.price}</Text>
                  </VStack>
                  <VStack space={2} padding={2}>
                    <Text bold>{prod.Stock}</Text>
                    <Button backgroundColor={"amber.400"} color={"red.600"}>
                      Add to Cart
                    </Button>
                  </VStack>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </div>
      ))}
    </Box>
  );
}

export default Card;
