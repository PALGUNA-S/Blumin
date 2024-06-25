import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import './ContactUs.css'
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <Box py={12} className='bgcolor' >
            <Container>
                <Box mb={4}>
                    <Typography variant="h4" fontWeight={500}>Contact Us</Typography>
                    <Typography pt={0.2} variant="h6">Feel free to let us know if you have any further questions or if there's anything else we can assist you with.</Typography>
                </Box>
                <Box sx={{
                    background: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(10px)',
                }} p={2}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} container direction="column" justifyContent="center">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" fontWeight={500}>Address</Typography>
                                    <Typography component={Link} sx={{ textDecoration: 'none', color: 'black' }}
                                        to='https://maps.app.goo.gl/pAWkwetTWz9o55nY6'
                                        target="_blank"
                                        rel="noopener noreferrer" variant="body1">Blumin, 4th floor, jyothi imperial building, old mumbai highway, janardhana hills, telecom nagar, gachibowli, 500032, hyderabad, telangana </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight={500}>Email</Typography>
                                    <Typography variant="body1">info@leremitt.com</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight={500}>Phone</Typography>
                                    <Typography variant="body1">+91 9876543210</Typography>
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
                                        <Box textAlign="center">
                                            <Button variant="contained" color="primary" fullWidth>
                                                Submit
                                            </Button>
                                        </Box>
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
