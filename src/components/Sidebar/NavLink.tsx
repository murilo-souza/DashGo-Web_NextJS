import { ElementType, ReactNode } from "react";
import {Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProp} from '@chakra-ui/react'
import Link from 'next/link'
import { ActiveLink } from "../activeLink";

interface NavLinkProps extends ChakraLinkProp {
    icon: ElementType;
    children: ReactNode;
    href: string
}

export function NavLink({icon, children, href, ...rest}: NavLinkProps){
    return(
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center"  alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}