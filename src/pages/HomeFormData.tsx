import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const HomeFormData = () => {

    const navigate = useNavigate()

    interface Data {
        name: string,
        phone: string,
        email: string,
    }

    const [formData, setFormData] = useState<Data>({ name: '', phone: '', email: '' })

    useEffect(() => {
        const data: any = localStorage.getItem('Form-Value')
        const covertData = JSON.parse(data)
        setFormData(covertData)
    }, [])

    if (formData.name == '' && formData.email == '' && formData.phone == '') {
        navigate('/')
    }

    return (
        <Box sx={{ width: '60%', margin: '50px auto' }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 700, mb: 5 }} variant="h4">Name : {formData.name}</Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 700, mb: 5 }} variant="h4">Phone : {formData.phone}</Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 700, mb: 5 }} variant="h4">Email : {formData.email}</Typography>
        </Box>
    );
};

export default HomeFormData;