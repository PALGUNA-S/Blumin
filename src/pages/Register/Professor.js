import { Box, Button, Container, Grid, TextField, Typography, MenuItem, Stack, styled } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import professorImage from '../../assets/professor.png'

const Professor = () => {
    const CustomTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            borderRadius: '0 20px',
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
        <Box py={12} sx={{ background: 'linear-gradient(270deg, #E0E0E0 3.99%, rgba(231, 231, 231, 0.52) 73.83%);', color: '#FFF', overflowX: 'hidden' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} p={0} order={{ xs: 2, md: 1 }}>
                        <Stack justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems={'center'} direction={'row'}>
                            <img
                                src={professorImage}
                                alt="Professor"
                                style={{ maxWidth: '100%', height: 'auto', transition: 'transform 2s ease-in-out', transform: 'translateX(0) scale(1)' }}
                                ref={imageRef}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={7} justifyContent={'space-between'} display={'flex'} flexDirection={'column'} order={{ xs: 1, md: 2 }}>
                        <Box color={'#074B65'} mb={3}>
                            <Typography variant="h4" fontWeight={500}>Professor Registration</Typography>
                            <Typography pt={0.2} variant="h6">Join as an educator!</Typography>
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
                            <Button variant="contained" size="large" sx={{ background: '#074B65', borderRadius: '0 20px', boxShadow: 'none', transition: 'background 0.3s ease-in-out', textTransform: 'capitalize', '&:hover': { background: '#D31480', transition: 'background 0.3s ease-in-out', boxShadow: 'none' }, width: '100%' }}>Submit</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Professor;
