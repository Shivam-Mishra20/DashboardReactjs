import { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { useColorMode } from '../../Context/Dark&LightMode';


function TwoSidedContactForm() {
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
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={4}>
                {/* Left Side - Contact Form */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            '& .MuiTextField-root': { mb: 2 },
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '500px',
                            margin: 'auto',
                            padding: 3,
                            backgroundColor: `${mode === 'light' ? 'white' : 'black'}`,
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
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
                </Grid>

                {/* Right Side - Google Maps Embed */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 3,
                            backgroundColor: `${mode === 'light' ? 'white' : 'black'}`,
                            borderRadius: 2,
                            boxShadow: 3,
                            height: '100%',
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9721793014705!2d77.27725219999999!3d28.6305959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad183ed837%3A0xc43e3751b0d3d6a0!2sMetro%20Station%20Laxmi%20Nagar%2C%20Veer%20Savarkar%20Block%2C%20Block%20D%2C%20Laxmi%20Nagar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1723035213060!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TwoSidedContactForm;
