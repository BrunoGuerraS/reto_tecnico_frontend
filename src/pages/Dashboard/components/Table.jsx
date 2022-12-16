import {
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot
} from '@chakra-ui/react'
import { useUser } from '../../../Hooks/useUser'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const TableDashboard = () => {
    const { token ,setToken } = useUser()
    const [ listUser, setListUser ] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            await axios.get(
                `${import.meta.env.VITE_API_URL}/users`,
                {
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            .then((res)=>{
                setListUser(res.data)
            })
        }
        getData()
    }, [import.meta.env.VITE_API_URL])
    const showUsers = () => {
        for(let i = 0; listUser.length > i; i++){
            const user = listUser[i]
            return (
                <Tr>
                        <Td>{user.id}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.phone}</Td>
                        <Td>{user.poliza[0]}</Td>
                </Tr>
            )
        }
    }
    console.log(listUser[0])
    
    console.log(listUser)
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>porque esto esta abajo</TableCaption>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Name</Th>
                        <Th>Phone</Th>
                        <Th>Nº Poliza</Th>
                        <Th>Placa</Th>
                        <Th>Auto</Th>
                        <Th>Año</Th>
                        <Th>Prima</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>75334262</Td>
                        <Td>Bruno Guerra</Td>
                        <Td>+51 989989999</Td>
                        <Td>1</Td>
                        <Td>ASD21</Td>
                        <Td>Porsche 911</Td>
                        <Td>2020</Td>
                        <Td>$300</Td>
                    </Tr>
    
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>

                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
