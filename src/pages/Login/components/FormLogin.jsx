import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Container,
    Heading
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../Hooks/useUser'


export default function FormLogin() {
    const { token ,setToken } = useUser()
    const navigate = useNavigate()
    const loginService = async (formValue) => {
        await axios.post(
            import.meta.env.VITE_API_URL, 
            formValue,
            {
                headers: {
                    'api': `${import.meta.env.VITE_API_KEY}/auth/login`,
                    'content-type': 'application/json'
                }
            }
        )
        .then((res) => {
            setToken(res.data.token)
            window.localStorage.setItem('token', res.data.token)
        }    
        )
        
    }

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
        
        loginService(values)
        if (token){
            navigate('/dashboard')
        }

    }

    return (
        <Container width='400px' boxShadow='lg' p='50px 40px'>
            <Heading textAlign={'center'} >Login</Heading>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        placeholder='email'
                        {...register('email', {
                            required: 'Required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl pt={'4'} isInvalid={errors.password}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        type='password'
                        id='password'
                        placeholder='password'
                        {...register('password', {
                            required: 'Required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </form>
        </Container>
    )
}