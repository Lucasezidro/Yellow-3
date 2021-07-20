import { Button, Flex, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "../components/Logo";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SignInWithGithub } from "../components/SignInWithGithub";
import { Link } from "@chakra-ui/react";
import Head from "next/head";

type SignInFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('E-mail obrigatorio.').email('E-mail invalido'),
    password: yup.string().required('Senha obrigatoria.').min(6, 'No minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisa, ser iguais')
  })



export default function createUser(){

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
      })
    
      const { errors } = formState
    
      const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
    
        console.log(values)
      }
   
    
  
    return(
        <Flex
            width="100vw" 
            height="100vh" 
            alignItems="center" 
            justifyContent="center"
        >

        <Head>
            <title>Yellow | Create User</title>
        </Head>
        
            <Flex
                as="form"
                width="100%" 
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
        <Stack spacing="4">

                <Logo />

                <Text as="p" align="center" color="yellow.300" mb="3">Create your Yellow account</Text>

                <Input 
                    name="name"
                    type="text"
                    focusBorderColor="yellow.600"
                    bg="gray.900"
                    transition="0.4s"
                    placeholder="Firstname"
                    _placeholder={{
                    color: "gray.400"
                    }}
                    _hover={{
                    bg: "yellow.200"
                    }}
                    size="lg"
                    variant="filled"
                    error={errors.name}
                    {...register('name')}


                />

                <Input 
                name="email"
                type="email"
                focusBorderColor="yellow.600"
                bg="gray.900"
                transition="0.4s"
                placeholder="E-mail"
                _placeholder={{
                  color: "gray.400"
                }}
                _hover={{
                  bg: "yellow.200"
                }}
                size="lg"
                variant="filled"
                error={errors.email}
                {...register('email')}

                />

            <InputGroup flexDir="column">
                <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    bg="gray.900"
                    focusBorderColor="yellow.600"
                    variant="filled"
                    placeholder="Password"
                    transition="0.4s"
                    _placeholder={{
                    color: "gray.400"
                    }}
                    _hover={{
                    bg: "yellow.200"
                    }}
                    size="lg"
                    error={errors.password}
                    {...register('password')}
                    
                />

                    
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick} color="gray.600">
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>

              </InputGroup>

                <InputGroup flexDir="column">
                    <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        bg="gray.900"
                        focusBorderColor="yellow.600"
                        variant="filled"
                        placeholder="Confirm Password"
                        transition="0.4s"
                        _placeholder={{
                        color: "gray.400"
                        }}
                        _hover={{
                        bg: "yellow.200"
                        }}
                        size="lg"
                        error={errors.password_confirmation}
                        {...register('password_confirmation')}
                        
                    />

                        
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick} color="gray.600">
                            {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>

                </InputGroup>

                <Button
                     type="submit" 
                     bg="yellow.600"
                     colorScheme="yellow.600" 
                     size="lg "
                     p="3"
                     transition="0.6s"
                     _hover={{
                       bg: "yellow.700"
                     }}
                     isLoading={formState.isSubmitting}
                >
                    <Link href="/dashboard" passHref>
                     Sign up
                    </Link>
                </Button>
                
                <SignInWithGithub />
               
             </Stack>
            </Flex>
        </Flex>
    )
}