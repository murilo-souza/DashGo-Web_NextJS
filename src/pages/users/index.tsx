import {Box, Flex, Heading, Button, Icon, Table, Tr, Th, Thead, Tbody, Td, Checkbox, Text, useBreakpointValue} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link'


export default function UserList(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
    return(
        <Box>
            <Header/>
            <Flex w="90%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink" 
                                leftIcon={<Icon as={RiAddLine}/>}
                                >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuários</Th>
                                { isWideVersion && <Th>Data de cadastro</Th>}
                                
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" mb="-2">Murilo Souza</Text>
                                        <Text fontSize="sm" color="gray.300">Murilo.l.souza232@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>27 de outubro, 2021</Td>}
                                
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" mb="-2">Murilo Souza</Text>
                                        <Text fontSize="sm" color="gray.300">Murilo.l.souza232@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>27 de outubro, 2021</Td>}
                                
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" mb="-2">Murilo Souza</Text>
                                        <Text fontSize="sm" color="gray.300">Murilo.l.souza232@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>27 de outubro, 2021</Td>}
                                
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    );
}