import { Box } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomeForm = () => {

    const navigate = useNavigate()

    const handleFormSubmit = (e: any) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value

        interface Value {
            name: string,
            phone: string,
            email: string,
        }

        const formValue: Value = {
            name,
            phone,
            email
        }
        localStorage.setItem('Form-Value', JSON.stringify(formValue))
        navigate('/form-data')
    }

    return (
        <Box sx={{ width: '60%', margin: '50px auto' }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 700, mb: 5 }} variant="h4">Form Field</Typography>
            <form onSubmit={handleFormSubmit}>
                <TextField name='name' sx={{ mb: 2 }} id="outlined-basic" label="Full Name" fullWidth variant="outlined" />
                <TextField name='phone' sx={{ mb: 2 }} id="outlined-basic" label="Phone Number" fullWidth variant="outlined" />
                <TextField name='email' sx={{ mb: 2 }} id="outlined-basic" label="Your Email" fullWidth variant="outlined" />
                <Button type='submit' variant="contained" sx={{ py: 1 }} fullWidth>Submit</Button>
            </form>
        </Box>
    );
};

export default HomeForm;