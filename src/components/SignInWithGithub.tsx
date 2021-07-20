import { Button, Icon } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/client";
import { FaGithub } from "react-icons/fa";
import { FiX } from 'react-icons/fi'


export function SignInWithGithub(){
    const [session] = useSession()

    return session ? (
        <Button
        type="button"
        color="gray.50"
        background="gray.900"
        _hover={{bg: "black"}}
        onClick={() => signOut()}
    >
        <Icon 
            as={FaGithub}
            fontSize="20px"
            mr="3"
            color="purple.300"
            />
        Sign in with Github

        <Icon 
            as={FiX}
            ml="3"
        />
    </Button>
       

    ) : (
        <Button
        type="button"
        color="gray.50"
        background="gray.900"
        _hover={{bg: "black"}}
        onClick={() => signIn('github')}
    >
        <Icon 
            as={FaGithub}
            fontSize="20px"
            mr="3"
            color="yellow.300"
            />
        Sign in with Github

        <Icon 
            as={FiX}
            ml="3"
        />
    </Button>
    )
}