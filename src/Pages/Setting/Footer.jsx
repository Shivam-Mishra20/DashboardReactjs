
import { Box, Container, Grid, Typography, Link, IconButton, Stack, colors } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* About Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are a company committed to providing the best services to our customers. Our mission is to...
                        </Typography>
                    </Grid>

                    {/* Links Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Stack direction={'column'} spacing={3}>
                            <NavLink to={'/'} style={{ color: "white", textDecoration: "none" }}>
                                Home
                            </NavLink>
                            <NavLink to={'/product'} style={{ color: "white", textDecoration: "none" }}>
                                Products
                            </NavLink>
                            <NavLink to={'/Analytics'} style={{ color: "white", textDecoration: "none" }}>
                                Aalytics
                            </NavLink>
                            <NavLink to={'/setting'} style={{ color: "white", textDecoration: "none" }}>
                                setting
                            </NavLink>
                        </Stack>
                    </Grid>

                    {/* Social Media Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton href="#" color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <LinkedIn />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Box mt={4} textAlign="center">
                    <Typography variant="body2">
                        © {new Date().getFullYear()} MISHRATECH. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
