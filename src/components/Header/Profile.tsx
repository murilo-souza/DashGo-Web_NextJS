import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?:boolean
}

export function Profile({showProfileData = true}){
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Murilo Souza</Text>
                    <Text color="gray.300" fontSize="small">Murilo.l.souza232@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Murilo Souza" src="https://github.com/murilo-souza.png"/>
        </Flex>
    );
}