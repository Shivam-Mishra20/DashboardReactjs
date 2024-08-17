
import { Box, Grid, Stack, Card, Skeleton, CardContent } from '@mui/material';

const Sekletonlayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                    {/* First Row - Income and Payment Cards */}
                    <Grid item xs={12} md={8}>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                            <Card sx={{ minWidth: { xs: '100%', md: '49%' }, height: 160 }}>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="text" sx={{ fontSize: '20px' }} width="60%" />
                                        <Skeleton variant="text" sx={{ fontSize: '16px' }} width="40%" />
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card sx={{ minWidth: { xs: '100%', md: '49%' }, height: 160 }}>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="text" sx={{ fontSize: '20px' }} width="60%" />
                                        <Skeleton variant="text" sx={{ fontSize: '16px' }} width="40%" />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>

                    {/* Second Column - Total Income and Net Profit Cards */}
                    <Grid item xs={12} md={4}>
                        <Stack direction="column" spacing={2}>
                            <Card sx={{ minWidth: { xs: '100%', md: 300 }, height: 70 }}>
                                <Stack spacing={2} direction="row" sx={{ alignItems: "center", justifyContent: "start", p: 2 }}>
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <Box>
                                        <Skeleton variant="text" width="50%" />
                                        <Skeleton variant="text" width="30%" />
                                    </Box>
                                </Stack>
                            </Card>

                            <Card sx={{ minWidth: { xs: '100%', md: 300 }, height: 70 }}>
                                <Stack spacing={2} direction="row" sx={{ alignItems: "center", justifyContent: "start", p: 2 }}>
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <Box>
                                        <Skeleton variant="text" sx={{ fontSize: '20px' }} width="50%" />
                                        <Skeleton variant="text" sx={{ fontSize: '16px' }} width="30%" />
                                    </Box>
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>

                <Box height={20} />

                {/* Bar Chart and Popular Product/Faq Cards */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ height: { xs: 'auto', md: '60vh' } }}>
                            <CardContent>
                                <Stack spacing={2}>
                                    <Skeleton variant="circular" width={100} height={80} />
                                    <Skeleton variant="text" sx={{ fontSize: '20px' }} width="50%" />
                                    <Skeleton variant="text" sx={{ fontSize: '16px' }} width="80%" />
                                    <Skeleton variant="text" sx={{ fontSize: '20px' }} width="80%" />
                                    <Skeleton variant="text" sx={{ fontSize: '16px' }} width="90%" />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: { xs: 'auto', md: '60vh' } }}>
                            <CardContent>
                                <Stack direction={'column'} spacing={2}>
                                    <Skeleton variant="text" sx={{ fontSize: '20px' }} width="50%" />
                                    <Skeleton variant="rectangular" width="100%" height={200} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Sekletonlayout;
