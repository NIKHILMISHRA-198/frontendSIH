import React from "react";
import { Box, Center, Input } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Center>
        <Input
          shadow={4}
          textAlign={"center"}
          placeholder="Search Products from SHGs"
          width="60%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Box marginLeft={4}>
              <FontAwesomeIcon size="xs" color="#b1b1b1" icon={faSearch} />
            </Box>
          }
        />
      </Center>
    </Box>
  );
}

export default SearchBar;
