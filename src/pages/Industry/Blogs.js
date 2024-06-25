import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import blog1 from '../../assets/1.jpg'
import blog2 from '../../assets/2.jpg'
import blog3 from '../../assets/3.jpg'

const Blogs = () => {
    const additionalContent = [
        {
            title: 'INDUSTRY ENGAGEMENT AND PROBLEM IDENTIFICATION',
            content1: 'Initiate discussions with potential industry partners.',
            content2: 'Arrange introductory meetings with industry representatives and gather insights.',
            img: blog1
        },
        {
            title: 'NEEDS ASSESSMENT AND PROBLEM DEFINITION',
            content1: 'Analyze industry trends, market dynamics, and regulations.',
            content2: 'Collaborate with stakeholders to define challenges and opportunities.',
            img: blog2
        },
        {
            title: 'DEPARTMENTAL ALLOCATION',
            content1: 'Assign requirements based on identified challenges.',
            content2: 'Form cross-functional teams and Allocate tasks to departments as per capabilities and expertise.',
            img: blog3
        },
    ];
    return (
        <Box py={5} sx={{ background: 'radial-gradient(at left top, #FFDEF1, #E9E9E9);' }} >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box textAlign={'center'} color={'#043D62'} mb={4}>
                            <Typography variant="h4" fontWeight={500}>
                                Dive into Our Blogosphere
                            </Typography>
                            <Typography variant="h6" pt={0.2}>
                                Discover Insights, Trends & Updates in Our Blogs
                            </Typography>
                        </Box>
                    </Grid>

                    {additionalContent.map((item, index) => (
                        <Grid key={index} item xs={12} md={4}>
                            <Card sx={{ height: '100%', boxShadow: 'none', borderRadius: '0 50px 0 20px' }}>
                                <CardMedia
                                    component="img"
                                    image={item.img}
                                    height={200}
                                    alt="Dummy Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Stack direction={'row'} spacing={1} >
                                        <span style={{ fontSize: '1.5rem', marginRight: '5px' }}>&#8226;</span>
                                        <Typography variant="body1">{item.content1}</Typography>
                                    </Stack>
                                    <Divider sx={{ my: 1, background: '#074B65' }} />
                                    <Stack direction={'row'} spacing={1} >
                                        <span style={{ fontSize: '1.5rem', marginRight: '5px' }}>&#8226;</span>
                                        <Typography variant="body1">{item.content2}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Blogs
