import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import './ContactUs.css'
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <Box py={12} className='bgcolor' >
            <Container>
                <Box color={'#043D62'} mb={4}>
                    <Typography variant="h4" fontWeight={500}>Contact Us</Typography>
                    <Typography pt={0.2} variant="h6">Feel free to let us know if you have any further questions or if there's anything else we can assist you with.</Typography>
                </Box>
                <Box p={2} sx={{ background: '#FFF', borderBottomLeftRadius: '40px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} container direction="column" justifyContent="center">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" fontWeight={500}>Address</Typography>
                                    <Typography
                                        component={Link}
                                        to='https://www.google.com/maps/dir/?api=1&destination=Blumin%2C+4th+floor%2C+jyothi+imperial+building%2C+old+mumbai+highway%2C+janardhana+hills%2C+telecom+nagar%2C+gachibowli%2C+500032%2C+hyderabad%2C+telangana'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'none', color: 'black' }}
                                        variant="body1"
                                    >
                                        Blumin, 4th floor, jyothi imperial building, old mumbai highway, janardhana hills, telecom nagar, gachibowli, 500032, hyderabad, telangana
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight={500}>Email</Typography>
                                    <Typography variant="body1">info@bluminiic.com</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight={500}>Phone</Typography>
                                    <Typography variant="body1">+91 9390910373</Typography>
                                </Grid>
                            </Grid>
                            <Box mt={2}>
                                <Typography variant="h6" fontWeight={500}>Business Hours</Typography>
                                <Typography variant="body1" mt={1}>
                                    Monday to Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 4:00 PM<br />
                                    Sunday: Closed
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Organization"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction={'row'} justifyContent={'flex-end'}>
                                            <Button variant="contained" size="large" sx={{ background: '#206498', borderRadius: '0 20px', boxShadow: 'none', transition: 'background 0.3s ease-in-out', textTransform: 'capitalize', '&:hover': { background: '#D31480', transition: 'background 0.3s ease-in-out', boxShadow: 'none' }, width: '40%' }}>
                                                Submit
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactUs;
