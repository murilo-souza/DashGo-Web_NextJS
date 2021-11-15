import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import {SubmitHandler, useForm} from 'react-hook-form'

type SignInFormData = {
  email: string;
  password: string;
}

export default function Signin() {
  const {register, handleSubmit, formState} = useForm()

  const handleSigin: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log(values)
  }

  return (
    <Flex w="90vw" h="90vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" justify="center" onSubmit={handleSubmit(handleSigin)}>
        <Stack spacing="4">
          <Input name ="email" type="email" label="E-mail" {...register('email')}/>
          <Input name ="password" type="password" label="Senha" {...register('password')}/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" border="none" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
