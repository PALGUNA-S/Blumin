import { Box, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import team from '../../assets/Team.jpg';

const OverView = () => {
    return (
        <Stack py={12} sx={{ background: 'linear-gradient(270deg, #DCE6F1 3.99%, rgba(231, 231, 231, 0.52) 73.83%);' }} >
            <Container>
                <Box color={'#074B65'} mb={4}>
                    <Typography variant="h4" fontWeight={500} >BLUMIN — Overview</Typography>
                    <Typography pt={0.2} variant="h6" >Bridging the Gap Between Industry and Academia</Typography>
                </Box>
                <Stack sx={{ background: '#fff', borderRadius: '40px 0 0 0', transition: 'box-shadow 0.5s ease-in-out', '&:hover': { transition: 'box-shadow 0.5s ease-in-out', boxShadow: '5px 5px 10px 2px rgba(0, 0, 0, 0.1)' } }} p={2} data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    height: '100%'
                                }}
                            >
                                <Typography variant='h5' mb={1} color={'#074B65'} fontWeight={500}>Innovative Collaborations</Typography>
                                <Typography variant="body1" textAlign={'justify'}>
                                    BLUMIN is a pioneering initiative focused on bridging the gap between industry and academia. By connecting forward-thinking companies with top-tier universities and colleges, BLUMIN facilitates meaningful collaborations to address the evolving needs of the technology ecosystem. With years of experience in fostering successful partnerships, BLUMIN offers unparalleled expertise, making it a standout choice for those seeking innovation and impactful collaborations.
                                </Typography>
                            </CardContent>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%'
                                }}
                            >
                                <img src={team} alt='team' width='100%' style={{ borderRadius: '0 0 40px 0' }} />
                            </CardContent>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
}

export default OverView;
