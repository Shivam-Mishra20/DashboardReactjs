import { useState } from 'react';

import { TextField, Button, Box, Typography } from '@mui/material';

import { useColorMode } from '../../Context/Dark&LightMode';


function Profile() {

    const { mode } = useColorMode();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., sending data to a server)
        console.log('Form data:', formData);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                maxWidth: '500px',
                margin: 'auto',
                padding: 2,
                backgroundColor: `${mode === 'light' ? 'white' : 'black'}`,
                borderRadius: 2,
                boxShadow: 3,
            }}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
            </Typography>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
                type="email"
            />
            <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            >
                Send Message
            </Button>
        </Box>
    );
}

export default Profile;
