import { Box, Button, Container, Grid, Typography, MenuItem, Stack, styled, TextField } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import studentImage from '../../assets/Student.png';

const Student = () => {
    const CustomTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            borderRadius: '0 20px',
            background: '#FFF',
            '& fieldset': {
                borderColor: '#074B65', // Default border color
            },
            '&:hover fieldset': {
                borderColor: '#074B65', // Hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: '#D31480', // Active border color
            },
            '& input': {
                color: '#074B65', // Text color
            },
        },
        '& .MuiInputLabel-root': {
            color: 'gray', // Label text color
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#074B65', // Label text color when focused
        },
    });

    const imageRef = useRef(null);

    useEffect(() => {
        const imgElement = imageRef.current;

        if (imgElement) {
            imgElement.style.transition = 'transform 2s ease-in-out';
            let moveUp = true;

            const animateImage = () => {
                const translateY = moveUp ? '-10px' : '10px';
                const scale = moveUp ? 1.1 : 1; // Adjust the scale values as needed

                imgElement.style.transform = `translateY(${translateY}) scale(${scale})`;
                moveUp = !moveUp;
            };

            const interval = setInterval(animateImage, 2000);

            return () => clearInterval(interval);
        }
    }, []);

    return (
        <Box py={12} sx={{ background: 'radial-gradient(at left top, #FFDEF1, #E9E9E9);', color: '#FFF', overflowX: 'hidden' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                            <Box color={'#074B65'} mb={3}>
                                <Typography variant="h4" fontWeight={500}>Student Registration</Typography>
                                <Typography pt={0.2} variant="h6">Register to get started with us!</Typography>
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        label="First Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        label="Last Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        label="Phone Number"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        label="Organization"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        select
                                        label="Subscription"
                                        variant="outlined"
                                    >
                                        <MenuItem value="free">Free</MenuItem>
                                        <MenuItem value="basic">Basic</MenuItem>
                                        <MenuItem value="premium">Premium</MenuItem>
                                    </CustomTextField>
                                </Grid>
                            </Grid>

                            <Stack mt={2}>
                                <Button variant="contained" size="large" sx={{ background: '#D31480', borderRadius: '0 20px', boxShadow: 'none', transition: 'background 0.3s ease-in-out', textTransform: 'capitalize', '&:hover': { background: '#074B65', transition: 'background 0.3s ease-in-out', boxShadow: 'none' }, width: '100%' }}>Submit</Button>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack justifyContent={{ xs: 'center', md: 'flex-end' }} alignItems={'center'} direction={'row'}>
                            <img
                                src={studentImage}
                                alt="Student"
                                style={{ maxWidth: '100%', height: 'auto', transition: 'transform 2s ease-in-out', transform: 'translateX(0) scale(1)' }}
                                ref={imageRef}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Student;
