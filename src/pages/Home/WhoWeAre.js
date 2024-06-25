import { Box, Button, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import React from 'react';
import './Home.css';

const teamData = [
    {
        id: 1,
        heading: 'Who we are ?',
        text: 'BLUMIN is a pioneering initiative aimed at bridging the gap between industry and academia. Our platform connects forward-thinking companies with top-tier universities and colleges to facilitate meaningful collaborations and address the evolving needs of the technology ecosystem.',
        title: "–An MSME Service Exporter",
    },
    {
        id: 2,
        heading: 'What we offer ?',
        text: 'With years of experience in facilitating successful collaborations, BLUMIN brings unparalleled expertise to every partnership.',
        title: "–An MSME Goods Exporter",
    },
    {
        id: 3,
        heading: 'Why Choose BLUMIN ?',
        text: 'At BLUMIN, we understand the dynamic landscape of innovation and the importance of forging meaningful partnerships. Here’s why we stand out:',
        title: "–A software service Exporter",
    },
];

const WhoWeAre = () => {
    return (
        <>
            <Box sx={{ py: 5 }} >
                <Container>
                    <Stack color={'#074B65'}>
                        <Typography variant="h4" fontWeight={500}>Who We Are</Typography>
                        <Typography pt={0.2} variant="h6" >
                            Bridging Industry and Academia for Innovative Collaborations.
                        </Typography>
                        <Typography pt={2} variant='body1' color={'black'}>BLUMIN is a pioneering initiative aimed at bridging the gap between industry and academia. Our platform connects forward-thinking companies with top-tier universities and colleges to facilitate meaningful collaborations and address the evolving needs of the technology ecosystem.</Typography>
                    </Stack>

                    <Stack pt={10} pb={10}>
                        <Splide
                            options={{
                                perPage: 2,
                                gap: 16,
                                type: "loop",
                                interval: 8000,
                                autoplay: true,
                                breakpoints: {
                                    1280: {
                                        perPage: 2, // Large screens (1280px and above)
                                    },
                                    960: {
                                        perPage: 1, // Medium screens (960px - 1279px)
                                    },
                                    600: {
                                        perPage: 1, // Small screens (600px - 959px)
                                    },
                                    599: {
                                        perPage: 1, // Extra small screens (0px - 599px)
                                    },
                                },
                            }}
                        >
                            {teamData.map((item) => (
                                <SplideSlide key={item.id}>
                                    <Card
                                        sx={{
                                            background: "#39AAF1",
                                            color: '#fff',
                                            display: "flex",
                                            height: "100%",
                                            flexDirection: "column",
                                            border: "none",
                                            boxShadow: "none",
                                            borderRadius: '0 20px 0 20px',
                                            textAlign: 'justify',
                                            transition: "background-color 0.8s, color 0.9s",
                                            "&:hover": {
                                                backgroundColor: "#D11580",
                                                color: "white",
                                            },
                                        }}
                                    >
                                        <CardContent
                                            style={{ flexGrow: 1 }}
                                            sx={{ paddingBottom: "0" }}
                                        >
                                            <Typography gutterBottom variant="h5" fontWeight={'500'}>{item.heading}</Typography>
                                            <Typography variant="body1" fontSize={'1rem'}>{item.text}</Typography>
                                        </CardContent>
                                        <CardContent>
                                            <CardActions sx={{ padding: 0, justifyContent: 'flex-end' }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        "&:hover": {
                                                            backgroundColor: "#2A6989",
                                                            boxShadow: "none",
                                                        },
                                                        boxShadow: "none",
                                                        borderRadius: '10px 0 10px 0',
                                                        background: "#074B65",
                                                        color: "#fff",
                                                        padding: "10px 20px",
                                                        fontSize: "1rem",
                                                        justifyContent: "space-between",
                                                        textTransform: "none",
                                                        fontWeight: '500'
                                                    }}
                                                >Know More</Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default WhoWeAre