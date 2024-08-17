import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PaymentIcon from '@mui/icons-material/Payment';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import '../Dash.css'
import Faq from "../Components/Faq";
import BarChart from "../Charts/BarChart";
import CountUp from 'react-countup';



const Home = () => {



    return (
        <>


            <Navbar />

            <Box height={60} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                                <Card sx={{ minWidth: { xs: '100%', md: '49%' }, height: 160, bgcolor: "#23296C" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <RequestQuoteIcon sx={{ color: "white", fontSize: 30 }} />
                                            <Typography sx={{ fontSize: "20px", color: "white" }}>
                                                $<CountUp duration={4.75} useEasing={true} separator=" " start={0} end={10000} />,
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "gray" }}>Total Income</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>

                                <Card sx={{ minWidth: { xs: '100%', md: '49%' }, height: 160, bgcolor: "#49A078" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <PaymentIcon sx={{ color: "white", fontSize: 30 }} />
                                            <Typography sx={{ fontSize: "20px", color: "white" }}>
                                                $<CountUp duration={4.75} useEasing={true} separator=" " start={0} end={80000} />
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "white" }}>Total Payment</Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack direction="column" spacing={3}>
                                <Card sx={{ minWidth: { xs: '100%', md: 345 } }}>
                                    <Stack spacing={2} direction="row" sx={{ alignItems: "center", justifyContent: "start", bgcolor: "#49A078" }} className="pdall">
                                        <AddBusinessIcon sx={{ fontSize: 30, color: "white" }} />
                                        <Box>
                                            <Typography sx={{ color: "white" }}>$10000</Typography>
                                            <Typography sx={{ color: "white" }}>Total Income</Typography>
                                        </Box>
                                    </Stack>
                                </Card>

                                <Card sx={{ minWidth: { xs: '100%', md: 345 } }}>
                                    <Stack spacing={2} direction="row" sx={{ alignItems: "center", justifyContent: "start" }} className="pdall">
                                        <PaymentIcon sx={{ fontSize: 30 }} />
                                        <Box>
                                            <Typography>$<CountUp duration={4.75} useEasing={true} separator=" " start={0} end={20000} /></Typography>
                                            <Typography>Net Profit</Typography>
                                        </Box>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Card sx={{ height: { xs: 'auto', md: '55vh', } }}>
                                <CardContent>


                                    <BarChart />

                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: { xs: 'auto', md: '55vh' } }}>
                                <CardContent>
                                    <Stack direction={'column'} spacing={2}>
                                        <div className="pdall">
                                            <Typography variant="body1" sx={{ fontSize: "20px" }}>Popular Product</Typography>
                                        </div>
                                        <Faq />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                </Box>



            </Box>





        </>
    )
}

export default Home