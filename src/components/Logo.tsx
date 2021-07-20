import { Flex, Text } from "@chakra-ui/react";

export function Logo(){
    return(
        <Flex
            flexDir="column"
            
        >
            <Text
            as="h1"
            fontSize="34"
            align="center"
            fontFamily="Poppins"
            color="yellow.500"

        >
            Yellow
        </Text>

        <Text
            as="span"
            fontSize="18px"
            color="purple.400"
            mb="8"
            align="center"
            fontFamily="Patrick Hand"
        >
            Tecnology
        </Text>
      </Flex>
    )}