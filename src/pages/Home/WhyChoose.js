import { Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Experience from '../../assets/Experience.svg';
import Innovation from '../../assets/Innovation.svg';
import Impact from '../../assets/Impact.svg';

const WhyChoose = () => {
    const services = [
        {
            title: 'Experience',
            content: 'With years of experience in facilitating successful collaborations, BLUMIN brings unparalleled expertise to every partnership.',
            image: Experience
        },
        {
            title: 'Innovation',
            content: 'Our commitment to innovation drives us to continually explore new opportunities and push the boundaries of what’s possible.',
            image: Innovation
        },
        {
            title: 'Impact',
            content: 'Join a community dedicated to making a meaningful impact on society through research-driven solutions and industry partnerships.',
            image: Impact
        }
    ];

    return (
        <Container sx={{ py: 5 }}>
            <Stack color="#074B65" mb={4}>
                <Typography variant="h4" fontWeight={500}>
                    Why Choose BLUMIN
                </Typography>
                <Typography pt={0.2} variant="h6">
                    Experience excellence in collaboration, innovation, and impact.
                </Typography>
            </Stack>

            <Grid container spacing={2}>
                {services.map((section, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{
                            height: '100%',
                            boxShadow: 'none',
                            borderRadius: '0 20px 0 20px',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                boxShadow: '5px 5px 10px 2px #dddddd'
                            }
                        }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={section.image}
                                alt={section.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color={'#074B65'} fontWeight={500} >
                                    {section.title}
                                </Typography>
                                <Typography variant="body1">
                                    {section.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default WhyChoose;
