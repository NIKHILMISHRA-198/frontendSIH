import logo from "./logo.svg";
import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
} from "native-base";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box minHeight="100vh" justifyContent="center" px={4}>
      <VStack space={8}>
        <SearchBar />
        <Card />
      </VStack>
    </Box>
  );
}

export default App;
