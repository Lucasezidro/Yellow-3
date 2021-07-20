import { Button, Flex, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    
    <Flex 
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
      >

        <Flex
          as="form" 
          width="100%" 
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >

          <Stack spacing="4">

            <Text
              fontSize="34"
              align="center"
              fontFamily="Poppins"
              color="yellow.500"

            >
              Yellow
            </Text>

            <Text
              fontSize="16px"
              color="purple.400"
              mb="8"
              align="center"
              fontFamily="Patrick Hand"
            >
              Tecnology
            </Text>
           
              <Input 
                name="email"
                type="email"
                focusBorderColor="yellow.600"
                bg="gray.900"
                placeholder="E-mail"
                _placeholder={{
                  color: "gray.400"
                }}
                _hover={{
                  bg: "yellow.200"
                }}
                size="md"
                variant="filled"

              />
            <InputGroup flexDir="column">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                bg="gray.900"
                focusBorderColor="yellow.600"
                variant="filled"
                placeholder="Enter password"
                _placeholder={{
                  color: "gray.400"
                }}
                _hover={{
                  bg: "yellow.200"
                }}
              />

                
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick} color="gray.600">
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>

              </InputGroup>

              <Button
                 type="submit" 
                 mt="6" 
                 bg="yellow.600"
                 colorScheme="yellow.600" 
                 size="md"
                 transition="0.6s"
                 _hover={{
                   bg: "yellow.700"
                 }}
              >Sign in</Button>

            </Stack>

        </Flex>

    </Flex>

  )
}
