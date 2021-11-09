import {Flex, useBreakpointValue, IconButton, Icon} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from '../Header/Logo'
import { NotificationNav } from '../Header/NotificationNav'
import { Profile } from '../Header/Profile'
import {SearchBox} from '../Header/SearchBox'

export function Header(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const {onOpen} = useSidebarDrawer()
    return(
        <Flex 
            as="header" 
            w ="90%" 
            maxWidth={1480} 
            h="20" 
            mx="auto" 
            mt="4" 
            px="6" 
            align="center"
        >

            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine}/>} 
                    fontSize="24" 
                    variant="unstyled" 
                    onClick={onOpen}
                    mr="2"
                    border="none"
                    pt='1.5'
                >

                </IconButton>
            )}
            <Logo/>
            {isWideVersion && <SearchBox/>}
            
            <Flex align="center" ml="auto" >
                
                <NotificationNav/>
               <Profile showProfileData={isWideVersion}/>

            </Flex>
        </Flex>
    )
}