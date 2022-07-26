import React from "react";
import { Box, Input, Icon } from "native-base";
// import SearchIcon from "@mui/icons-material/Search";
function SearchBar() {
  return (
    <Box>
      <Input
        placeholder="Search People & Places"
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        fontSize="14"
        // InputLeftElement={<SearchIcon />}
        // InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" />}
      />
    </Box>
  );
}

export default SearchBar;
