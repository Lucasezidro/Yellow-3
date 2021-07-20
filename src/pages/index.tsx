import { Button, Flex, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useState } from "react";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from "@chakra-ui/react";
import { Logo } from "../components/Logo";
import Head from "next/head";

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio.').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatoria.'),
})

export default function Home() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

 

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (

    
    <Flex 
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
    >

        <Head>
          <title>Yellow | Home</title>
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
                placeholder="Enter password"
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
                  Sign in
                </Link>
              </Button>

              <Link
                href="/createUser"
                passHref
                color="purple.400"
                opacity="0.8"
                align="center"
                transition="0.3s"
                _hover={{
                  opacity: "1",
                  textDecoration: "underline"
                }}
              >
                 Or create your account
              </Link>

            </Stack>

        </Flex>

    </Flex>

  )
}
