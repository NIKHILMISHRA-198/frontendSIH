import {
  Box,
  VStack,
  Text,
  Image,
  Center,
  Heading,
  FormControl,
  Button,
} from "native-base";
import React, { useState } from "react";
import axios from "axios";
import "../Pages/formStyle.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.email, data.name, data.password);
  };

  const handleSubmit = (e) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:4000/api/v1/register", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
  };

  return (
    <Box>
      <Box>
        <Box margin={4} shadow={4} flexDir={["col", "row"]}>
          {/* Image */}
          <VStack
            width={["100%", "50%"]}
            backgroundColor={["white", "#FFF6E0"]}
          >
            <Box flexDir={"row"} margin={["auto", "4"]}>
              <Image
                marginTop={2}
                marginBottom={2}
                source="https://res.cloudinary.com/ipwesix/image/upload/v1658852806/dummy%20images%20for%20sambhav/logo_nepcqu.png"
                size={"100"}
                alt={"alt"}
              />
              <VStack padding={2} margin={""}>
                <Text color={"#EEB71C"} bold fontSize={"4xl"}>
                  SAMBHAV
                </Text>
                <Text fontWeight={"light"} fontSize={"3xl"}>
                  SHG के साथ
                </Text>
              </VStack>
            </Box>
            <Text
              fontSize={["lg", "3xl"]}
              fontWeight={"bold"}
              margin={[8]}
              textAlign={["center", "left"]}
            >
              <Text color={"#EEB71C"} paddingRight={1}>
                Welcome!
              </Text>{" "}
              Join Hands in Building Our Nations Future and Help Uplift Woman
            </Text>

            <Image
              display={["none", "block"]}
              shadow={6}
              margin={"auto"}
              source="https://res.cloudinary.com/ipwesix/image/upload/v1658896793/dummy%20images%20for%20sambhav/loginscreenImage_m16nnn.png"
              size={"80"}
              alt={"alt"}
            ></Image>
          </VStack>
          <VStack width={["100%", "50%"]}>
            <Center w="100%">
              <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" fontWeight="semibold">
                  सम्भव है
                </Heading>
                <Heading
                  mt="1"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="medium"
                  size="xs"
                >
                  Sign up to continue!
                </Heading>

                <VStack space={3} mt="5">
                  <FormControl>
                    <form onSubmit={handleSubmit}>
                      <FormControl.Label>Name</FormControl.Label>
                      <input
                        className="formInput"
                        type="text"
                        name="name"
                        value={data.name}
                        placeholder="enter your name"
                        onChange={handleChange}
                      />
                      <FormControl.Label>email</FormControl.Label>
                      <input
                        type="text"
                        name="email"
                        value={data.email}
                        placeholder="email enter karo"
                        onChange={handleChange}
                      />
                      <FormControl.Label>Password</FormControl.Label>
                      <input
                        type="text"
                        name="password"
                        value={data.password}
                        placeholder="password bata"
                        onChange={handleChange}
                      />
                      <FormControl.Label>
                        {" "}
                        <input type="submit" value="register" />
                      </FormControl.Label>

                      {/* <Button
                      mt="2"
                      backgroundColor={"#EEB71C"}
                      onPress={handleSubmit}
                    >
                      Register
                    </Button> */}
                    </form>
                  </FormControl>
                  <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="medium"
                    size="xs"
                  >
                    Already a member? Then Login
                    <br />
                    <Link to="/login">
                      <Button mt="2" backgroundColor={"#EEB71C"}>
                        Login
                      </Button>
                    </Link>
                  </Heading>
                </VStack>
              </Box>
            </Center>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterForm;
