import { Box, Stack, useBreakpointValue, DrawerOverlay, Drawer, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NavLink } from "./NavLink";
import {NavSection} from './NavSection'
import { SidebarNav } from "./SidebarNav";

export function Sidebar(){
    const {isOpen, onClose} = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg:false,
    })
    
    if(isDrawerSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p="4">
                        <DrawerCloseButton mt="6" variant="ghost" border="none" color="white" bg="transparent"/>
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
       <Box as="aside" w="64" mr="8">
           <SidebarNav/>
       </Box>
    )
}