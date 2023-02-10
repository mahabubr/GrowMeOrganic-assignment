import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

const Data = () => {

    interface Data {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    const [userData, setUserData]: any = useState<Data>()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <Box sx={{ width: '70%', margin: '50px auto' }}>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData?.map((row: any, i: number) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.body}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Data;