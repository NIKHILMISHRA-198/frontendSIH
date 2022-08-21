import { Box, FormControl, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function CreateProduct() {
  const categories = [
    "Home-Decoration",
    "Footwear",
    "Clothing Accessories",
    "Cleaning Material",
    "Edibles",
    "Clothing",
    "Mask",
  ];
  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    images: "",
    category: "",
  });
  const submitHandler = (e) => {};

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  return (
    <Box margin={4}>
      <VStack>
        <Text fontSize={"4xl"}>Products create kar!!</Text>
        <FormControl>
          <form onSubmit={submitHandler}>
            <FormControl.Label>Product name</FormControl.Label>
            <input
              type="text"
              name="productName"
              value={""}
              placeholder="Enter Product Name"
              onChange={handleChange}
            />
            <FormControl.Label>Product description</FormControl.Label>
            <input
              type="text"
              name="productDescription"
              value={""}
              placeholder="Enter Product description"
              onChange={handleChange}
            />
            <FormControl.Label>Price</FormControl.Label>
            <input
              type="text"
              name="price"
              value={""}
              placeholder="Enter Product price"
              onChange={handleChange}
            />
            <FormControl.Label>Product Category</FormControl.Label>
            <input
              type="text"
              name="category"
              value={""}
              placeholder="Select Product category"
              onChange={handleChange}
            />
            <FormControl.Label>Product images</FormControl.Label>
            <input type="file" accept="image/*" multiple />
          </form>
        </FormControl>
      </VStack>
    </Box>
  );
}
export default CreateProduct;
