import { Flex, Stack, Image, Box, Text, Button, Link } from "@chakra-ui/react";
import Head from 'next/head'

import { Logo } from "../components/Logo";
import { NavMenu } from "../components/NavMenu";


export default function Dashboard(){
    return(
        <>
        <Head>
            <title>Yellow | Dashboard</title>
        </Head>

        <Flex> 
            
            <Stack spacing="4" ml="5" mt="4">
                <Logo />
            </Stack>

            <NavMenu />

            <Box 
                align="center" 
                pos="absolute" 
                margin="auto"
                top="250px"
                left="200px"
                >
                <Text 
                    as="h1"
                    pos="relative"
                    bottom="100px"
                    fontFamily="Poppins"
                    color="yellow.500"
                    fontSize="50"
                    >
                        Welcome to Yellow
                </Text>

                <Text
                    as="span"
                    position="relative"
                    bottom="90px"
                    left="60px"
                    color="purple.400"
                    fontFamily="Poppins"
                    fontSize="18"
                >
                    The best place to learn about technology
                </Text>

                <Button
                    position="relative"
                    bg="yellow.500"
                    color="gray.900"
                    fontFamily="Poppins"
                    right="180px"
                    top="50px"
                    transition="0.5s"
                    _hover={{
                        bg: "yellow.700",
                        color: "gray.100"
                    }}
                >
                    <Link href="/courses" passHref>
                        Learn more
                    </Link>
                </Button>

            </Box>

            <Box boxSize="md" mt="100px" ml="360px">
                <Image src="/images/avatar.jpg" alt="avatar" borderRadius="8" />
            </Box>



            
        </Flex>
        </>
    )
}