import { Avatar, Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { FaCss3, FaHtml5, FaLinux, FaNodeJs, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiMysql } from 'react-icons/di'
import { Logo } from "../components/Logo";
import { NavMenu } from "../components/NavMenu";


export default function Profile(){
    return(

        <Flex
            width="100vw" 
            height="100vh" 
            alignItems="center" 
            justifyContent="center"
        >
            <Head>
                <title>Yellow | Profile</title>
            </Head>

           <Box
            pos="absolute"
            left="20px"
            top="20px"
           >
            <Logo />
           </Box>

          <Box
            pos="absolute"
            right="800px"
            top="20px"
          >
            <NavMenu />
          </Box>

            <Flex
                as="section"
                w="1000px"
                height="400px"
                bg="gray.800"
                borderRadius="10"
            >

                <Text   
                    as="h1"
                    mt="5"
                    ml="5"
                    fontSize="35"
                    color="yellow.400"
                    fontFamily="Poppins"

                >
                 Profile
                </Text>

                <Box 
                    mr="4" 
                    textAlign="right"
                    pos="absolute"
                    left="950px"
                    top="110px"
                    >
                    <Text pos="relative" right="55px"mb="1" color="yellow.500">Lucas Ezidro</Text>
                    <Text color="purple.400" fontSize="small">lucasezidro7@gmail.com</Text>
                </Box>

                <Box
                    pos="absolute"
                    right="205px"
                    top="110px"
                >
                    <Avatar size="md" name="Lucas Ezidro" src="https://avatars.githubusercontent.com/u/80000943?v=4" />
                </Box>

                <Box
                    pos="absolute"
                    top="200px"
                    left="210px"
                    fontSize="20"
                    color="yellow.400"
                    fontFamily="Poppins"
                >
                    <Text>Skills</Text>

                    <Icon as={FaReact} color="blue.300" mt="10px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        bottom="20px"
                        color="purple.400"
                        fontSize="16"
                    >
                        ReactJs
                    </Text>

                    <Icon as={FaReact} color="blue.600" mt="10px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        bottom="20px"
                        color="purple.400"
                        fontSize="16"
                    >
                        React Native
                    </Text>

                    <Icon as={IoLogoJavascript} color="yellow.300" mt="10px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        bottom="20px"
                        color="purple.400"
                        fontSize="16"
                    >
                        JavaScript
                    </Text>

                    <Icon as={DiMysql} color="yellow.600" mt="10px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        bottom="20px"
                        color="purple.400"
                        fontSize="16"
                    >
                        SQL
                    </Text>

                    <Icon as={FaHtml5} color="orange.500" mt="10px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        bottom="20px"
                        color="purple.400"
                        fontSize="16"
                    >
                        HTML
                    </Text>
                </Box>

                <Box
                    pos="absolute"
                    top="200px"
                    left="410px"
                    fontSize="20"
                    color="yellow.400"
                    fontFamily="Poppins"
                >
                <Icon as={FaCss3} color="blue.500" mt="10px" position="relative" top="30px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        top="10px"
                        color="purple.400"
                        fontSize="16"
                    >
                        CSS
                    </Text>

                <Icon as={FaSass} color="pink.500" mt="10px" position="relative" top="30px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        top="10px"
                        color="purple.400"
                        fontSize="16"
                    >
                        SCSS
                    </Text>

                <Icon as={FaNodeJs} color="green.400" mt="10px" position="relative" top="30px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        top="10px"
                        color="purple.400"
                        fontSize="16"
                    >
                        Node
                    </Text>

                <Icon as={FaPython} color="blue.200" mt="10px" position="relative" top="30px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        top="10px"
                        color="purple.400"
                        fontSize="16"
                    >
                        Python
                    </Text>

                <Icon as={FaLinux} color="yellow.300" mt="10px" position="relative" top="30px" />
                    <Text 
                        pos="relative"
                        left="30px"
                        top="10px"
                        color="purple.400"
                        fontSize="16"
                    >
                        Linux
                    </Text>

                    
                </Box>

                <Text
                    pos="relative"
                    left="360px"
                    top="100px"
                    fontSize="20"
                    color="yellow.400"
                    fontFamily="Poppins"
                >
                    Projetos
                </Text>

                <Box
                    pos="relative"
                    bg="gray.700"
                    width="300px"
                    height="70px"
                    borderRadius="10"
                    left="278.99px"
                    top="150px"
                    
                >
                    <Text align="center" color="yellow.300" fontSize="18" fontFamily="Poppins">Ig.news</Text>
                    <Link 
                        href="https://github.com/Lucasezidro/ig.news" 
                        pos="relative"
                        left="90px"
                        top="5px"
                        target="_blank"
                        textDecoration="underline"
                        color="purple.400"
                        fontFamily="Poppins"
                        fontSize="16"
                        _hover={{
                            color: "purple.600"
                        }}
                        >
                            Repositorio
                    </Link>

                </Box>
                <Box
                    pos="relative"
                    bg="gray.700"
                    width="300px"
                    height="70px"
                    borderRadius="10"
                    left="17.5px"
                    top="310px"
                    
                >
                    <Text align="center" color="yellow.300" fontSize="18" fontFamily="Poppins">Dashgo</Text>
                    <Link 
                        href="https://github.com/Lucasezidro/Dashgo" 
                        pos="relative"
                        left="90px"
                        top="5px"
                        target="_blank"
                        textDecoration="underline"
                        color="purple.400"
                        fontFamily="Poppins"
                        fontSize="16"
                        _hover={{
                            color: "purple.600"
                        }}
                        >
                            Repositorio
                    </Link>

                </Box>
                <Box
                    pos="relative"
                    bg="gray.700"
                    width="300px"
                    height="70px"
                    borderRadius="10"
                    right="245px"
                    top="230px"
                    
                >
                    <Text align="center" color="yellow.300" fontSize="18" fontFamily="Poppins">Yellow-2</Text>
                    <Link 
                        href="https://github.com/Lucasezidro/yellow-2.0" 
                        pos="relative"
                        left="90px"
                        top="5px"
                        target="_blank"
                        textDecoration="underline"
                        color="purple.400"
                        fontFamily="Poppins"
                        fontSize="16"
                        _hover={{
                            color: "purple.600"
                        }}
                        >
                            Repositorio
                    </Link>

                </Box>

            </Flex>
        </Flex>
    )
}