import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

import { BsChevronCompactDown } from 'react-icons/bs'

export function NavMenu(){
    return(
        <Breadcrumb 
                position="relative"
                ml="5"
                left="720px"
                top="3"
                               
                >
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard" color="yellow.500">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/profile" color="yellow.500">Profile</BreadcrumbLink>
                </BreadcrumbItem>
        
                <BreadcrumbItem>
                    <BreadcrumbLink href="https://github.com/Lucasezidro?tab=repositories" target="_blank" passHref color="yellow.500">Repositories</BreadcrumbLink>
                </BreadcrumbItem>


                <BreadcrumbItem>
                    <BreadcrumbLink href="/contact" passHref color="yellow.500">Contact</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
    )
}