import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import CollaborationLogo from '../../assets/Collaboration.png';
import CoreValuesImage from '../../assets/CoreValues.svg';
import Excellence from '../../assets/Excellence.png';
import InnovationLogo from '../../assets/Innovation.png';
import IntegrityLogo from '../../assets/Integrity.png';
import Community from '../../assets/Community.png'

const coreValuesList = [
    { value: 'Integrity', description: 'We uphold honesty and ethical behavior in all our interactions, ensuring trust and transparency.', logo: IntegrityLogo },
    { value: 'Collaboration', description: 'We foster teamwork and cooperation, leveraging diverse perspectives to achieve shared goals and success.', logo: CollaborationLogo },
    { value: 'Excellence', description: 'We strive for excellence in everything we do, delivering quality, precision, and value to our stakeholders.', logo: Excellence },
    { value: 'Innovation', description: 'We embrace creativity and forward-thinking to drive continuous improvement and groundbreaking solutions.', logo: InnovationLogo },
    { value: 'Community', description: 'We are committed to supporting and enriching the communities we serve, promoting positive impact and social responsibility.', logo: Community }
];

const CoreValues = () => {
    return (
        <Box py={5} sx={{ background: 'linear-gradient(270deg, #DCE6F1 3.99%, rgba(231, 231, 231, 0.52) 73.83%);' }}>
            <Container>
                <Box color={'#074B65'} mb={4}>
                    <Typography variant="h4" fontWeight={500}>Our Core Values</Typography>
                    <Typography pt={0.2} variant="h6">Guiding principles for success and impactful contributions to society.</Typography>
                </Box>
                <Card sx={{ borderRadius: '0 0 30px 0', transition: 'box-shadow 0.5s ease-in-out', boxShadow: '5px 5px 10px 2px rgba(0, 0, 0, 0.1)', '&:hover': { transition: 'box-shadow 0.5s ease-in-out', boxShadow: 'none' } }}>
                    <Grid container spacing={2}>
                        <Grid item md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={CoreValuesImage} alt="Core Values" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
                            <Box pt={2}>
                                {coreValuesList.map((item, index) => (
                                    <Stack key={index} pb={2} pr={2} direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                        <img src={item.logo} alt={item.value} style={{ width: 60, height: 60 }} />
                                        <Box>
                                            <Typography variant='h6' fontWeight={500} color={'#074B65'}>{item.value}</Typography>
                                            <Typography variant='body1'>{item.description}</Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Box>
    );
}

export default CoreValues;
