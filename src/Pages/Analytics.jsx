import { Box, Card, CardContent, Grid, Stack, Typography, } from '@mui/material'

import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Piechart } from '../Charts/Piechart'
import { HistroChart } from '../Charts/HistroChart'
import { GeoChart } from '../Charts/GeoChart'
import CountUp from 'react-countup';

const About = () => {
    return (
        <>
            <Navbar />

            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Box height={60} />
                    <Grid container spacing={2}>
                        {/* Row 1 */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack spacing={2}>
                                <Card sx={{ height: 120, bgcolor: "#23296C" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Typography sx={{ fontSize: "20px", color: "white" }}>
                                                $<CountUp duration={2.75} useEasing={true} separator=" " start={0} end={20000} />
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "gray" }}>Total Income</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card sx={{ height: 120, bgcolor: "#23296C" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Typography sx={{ fontSize: "20px", color: "white" }}>
                                                $<CountUp duration={3.75} useEasing={true} separator=" " start={0} end={10000} />
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "gray" }}>Total Income</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Stack spacing={2}>
                                <Card sx={{ height: 120, bgcolor: "#49A078" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Typography sx={{ fontSize: "20px", color: "white" }}>
                                                $<CountUp duration={1.75} useEasing={true} separator=" " start={0} end={80000} />
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "white" }}>Total Income</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card sx={{ height: 120, bgcolor: "#49A078" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Typography sx={{ fontSize: "20px", color: "white" }}>
                                                $<CountUp duration={0.75} useEasing={true} separator=" " start={0} end={15000} />
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "white" }}>Total Income</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: { xs: 'auto', md: 255 } }}>
                                <CardContent>
                                    <HistroChart />
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Row 2 */}
                        <Box height={20} />

                        <Grid item xs={12} md={8}>
                            <Card sx={{ height: { xs: 'auto', md: '45vh' } }}>
                                <CardContent>
                                    <GeoChart />
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: { xs: 'auto', md: '45vh' } }}>
                                <CardContent>
                                    <Piechart />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                </Box>



            </Box>


        </>
    )
}

export default About