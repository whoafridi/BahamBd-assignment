import React, { useEffect, useState } from "react";
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
  Button
} from "@chakra-ui/react";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log('i\'m okay')
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    console.log(formValues);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      console.log(formErrors);
    }
  }, [formErrors,formValues]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["gray.400", "gray.300"]}
      borderRadius={10}
      align={["center"]}
    >
      <VStack spacing={4} w="full">
        <VStack spacing={1} w="full">
          <Heading>Login</Heading>
          <Text>Enter your email and password to login</Text>
        </VStack>
          <form onSubmit={handleSubmit} method='POST'>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input rounded="none" variant="filled" type={"email"} name="email" id="email" placeholder="email"
          value={formValues.email}
          onChange={handleChange}/>
            </FormControl>
            <FormControl>
        <p style={{'color':"red","margin":"5px"}}>{formErrors.email}</p>
          <FormLabel>Password</FormLabel>
          <Input rounded="none" variant="filled" type={"password"} name="password" id="password" placeholder="password"
          value={formValues.password}
          onChange={handleChange}/>
        <p  style={{'color':"red","margin":"5px"}}>{formErrors.password}</p>
        </FormControl>
        <HStack w="full" justify={"space-between"}>
          <Button variant={"link"} colorScheme="blue">
            Forget Password?
          </Button>
        </HStack>
        <Button
          rounded={["none", "15px"]} type="submit"
          colorScheme="blue"
          w={["full", "auto"]}
          alignSelf="end"
          onClick={()=>{console.log('click')}}
        >
          Login
        </Button>
        </form>
      </VStack>
      <Link href="/customerform">
        <a style={{"color":"blue"}}>Go to Customerform</a>
      </Link>
    </Box>
  );
};

export default Login;
