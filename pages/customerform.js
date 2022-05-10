import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";

const customerform = () => {
  
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Customer Form</Heading>
          <Text>Enter your cretenditials wisely</Text>
        </VStack>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input rounded="none" variant="filled" id="name" type="name" />
          <FormLabel>Address</FormLabel>
          <Input rounded="none" variant="filled" />
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select id="country" placeholder="Select gender">
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Select>
          <FormLabel>District</FormLabel>
          <Input rounded="none" variant="filled" type={"text"} />
          <FormLabel>Age</FormLabel>
          <NumberInput>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <HStack w="full" justify={"space-between"}>
          <Checkbox>Remember me</Checkbox>
          <Button variant={"link"} colorScheme="blue">
            Forget Password?
          </Button>
        </HStack>
        <Button
          rounded={"none"}
          colorScheme="blue"
          w={["full", "auto"]}
          alignSelf="end"
        >
          Login
        </Button>
      </VStack>
      <Link href="/">
        <a style={{ color: "darkblue" }}>Go to Login</a>
      </Link>
    </Box>
  );
};

export default customerform;
