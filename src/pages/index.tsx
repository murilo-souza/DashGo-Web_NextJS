import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'


export default function Signin() {
  return (
    <Flex w="90vw" h="90vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" justify="center">
        <Stack spacing="4">
          <Input name ="email" type="email" label="E-mail"/>
          <Input name ="password" type="password" label="Senha"/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" border="none">Entrar</Button>
      </Flex>
    </Flex>
  )
}
