import { Box, VStack, Text, HStack, Button } from "native-base";
import React from "react";

function Card() {
  return (
    <Box border="2" borderRadius="md" shadow={"6"} width={["100%=vw", "250px"]}>
      <VStack>
        <Box>
          <img
            src="https://www.easternleaf.com/v/vspfiles/photos/900980-02-2.jpg"
            width={["100%"]}
          />
        </Box>
        <Box width={"100"}>
          <HStack flexDir={"row"} space={"100%"}>
            <VStack space={2} padding={2}>
              <Text bold>Himachal Candle</Text>
              <Text color={"red.600"}>Rs.300</Text>
            </VStack>
            <VStack space={2} padding={2}>
              <Text bold>377 Reviews</Text>
              <Button backgroundColor={"amber.400"} color={"red.600"}>
                Add to Cart
              </Button>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Card;
