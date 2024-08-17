/* eslint-disable react/prop-types */
import { Card, CardContent, Avatar, Typography, Grid, Button, Box } from '@mui/material';
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"



const Profile = ({ isauth, logout, user }) => {
    return (
        <>

            <Navbar />

            <Box height={100} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Card style={{ maxWidth: 400, margin: 'auto', padding: '20px 5px', boxShadow: "2px 2px 4px 2px black" }}>
                        <CardContent>
                            <Grid container justifyContent="center" alignItems="center" direction="column">
                                <Avatar
                                    alt="User Profile"
                                    src={user.picture}
                                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                                />
                                <Typography variant="h5" gutterBottom>
                                    {user.nickname}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Email :  <strong>{user.email}</strong>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {isauth ? `${user.name} is logged in` : "You are not logged in"}

                                </Typography>
                                <Button variant="contained" onClick={() => logout()} color="primary">
                                    Logout
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>



                </Box>



            </Box>


        </>
    )
}

export default Profile