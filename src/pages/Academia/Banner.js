import React, { useState } from 'react';
import { Box, Container, Grid, Stack, Typography, Card, CardContent, Button } from '@mui/material';
import { FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import unity from '../../assets/unity.svg';

const universitiesData = [
    {
        title: 'Industry Collaboration',
        description: 'Bridge industry and academia for collaborations, creating innovative solutions that benefit both parties equally.'
    },
    {
        title: 'Research Support',
        description: 'Assist universities in conducting relevant research aligned with industry demands and advancements in technology.'
    },
    {
        title: 'Funding Access',
        description: 'Aid in securing competitive funding for innovative projects, ranging from $15,000 to $120,000, for university initiatives.'
    },
    {
        title: 'Innovation Hubs',
        description: 'Create innovation hubs within universities to foster creativity, practical solutions, and entrepreneurial spirit.'
    }
];

const studentData = [
    {
        title: 'Internship Programs',
        description: 'Gain real-world experience through internships with partner organizations, enhancing skills and industry readiness.'
    },
    {
        title: 'Learning Programs',
        description: 'Accelerate student learning with real-world experiences and funding opportunities provided through internships.'
    },
    {
        title: 'Skills Workshops',
        description: 'Participate in workshops to develop industry-relevant skills, improving employability and career prospects.'
    },
    {
        title: 'Career Guidance',
        description: 'Receive guidance and support for career planning, job placement, and navigating the job market effectively.'
    }
];

const professorData = [
    {
        title: 'Research Projects',
        description: 'Facilitate joint projects between industry and academia for innovative solutions and knowledge exchange.'
    },
    {
        title: 'Advisory Roles',
        description: 'Engage professors in advisory boards, guiding curriculum development and research priorities for industry relevance.'
    },
    {
        title: 'Growth Seminars',
        description: 'Offer workshops and seminars to enhance teaching, research techniques, and industry relevance for career advancement.'
    },
    {
        title: 'Grant Support',
        description: 'Provide support for writing grant proposals to secure research funding, enhancing research capabilities.'
    }
];

const Banner = () => {
    const [visibleSection, setVisibleSection] = useState('universities');

    const buttonStyle = (activeColor, inactiveColor) => ({
        color: '#FFF',
        bgcolor: visibleSection === activeColor ? '#D31480' : inactiveColor,
        gap: '15px',
        width: '100%',
        '&:hover': {
            bgcolor: visibleSection === activeColor ? '#D31480' : inactiveColor,
        },
    });

    const headings = {
        universities: 'Empowering Universities with BLUMIN',
        students: 'Empowering Students with BLUMIN',
        professors: 'Empowering Professors with BLUMIN',
    };

    const getCardData = () => {
        switch (visibleSection) {
            case 'universities':
                return universitiesData;
            case 'students':
                return studentData;
            case 'professors':
                return professorData;
            default:
                return [];
        }
    };

    const cards = getCardData();

    return (
        <Stack py={12}>
            <Container>
                <Box color={'#074B65'} mb={1}>
                    <Typography variant="h4" fontWeight={500}>Academia</Typography>
                    <Typography pt={0.2} variant="h6">Bridging the Gap Between Industry and Academia</Typography>
                </Box>

                <Stack direction={{ md: 'row', xs: 'column' }} justifyContent={{ md: 'center', xs: 'start' }} alignItems={{ md: 'center', xs: 'start' }} spacing={2} my={4}>
                    <Button
                        variant="contained"
                        onClick={() => setVisibleSection('universities')}
                        sx={{ ...buttonStyle('universities', '#206498'), borderRadius: '10px 0 0 0' }}
                        endIcon={<FaUniversity size={30} color="#FFF" />}
                    >
                        Universities
                    </Button>

                    <Button
                        variant="contained"
                        onClick={() => setVisibleSection('students')}
                        sx={{ ...buttonStyle('students', '#206498'), borderRadius: 0 }}
                        endIcon={<PiStudentFill size={30} color="#FFF" />}
                    >
                        Students
                    </Button>

                    <Button
                        variant="contained"
                        onClick={() => setVisibleSection('professors')}
                        sx={{ ...buttonStyle('professors', '#206498'), borderRadius: '0 10px 0 0' }}
                        endIcon={<FaChalkboardTeacher size={30} color="#FFF" />}
                    >
                        Professors
                    </Button>
                </Stack>

                <Typography variant="h5" color="#074B65" fontWeight={500} my={2}>{headings[visibleSection]}</Typography>

                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Stack spacing={4}>
                            {cards.slice(0, 2).map((item, index) => (
                                <Card data-aos="zoom-in"
                                    key={index}
                                    sx={{ height: '100%', transition: 'transform 0.3s ease-in-out', boxShadow: 'none', borderTopLeftRadius: '20px', py: 1, background: 'linear-gradient(90deg, rgba(227,16,127,0.10136554621848737) 0%, rgba(236,236,236,0.6559873949579832) 70%)' }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" fontWeight={500}>{item.title}</Typography>
                                        <Typography variant="body1">{item.description}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack alignItems="center">
                            <Box component="img" src={unity} alt="Unity SVG" width="100%" maxWidth={500} sx={{ borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' }} />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack spacing={4}>
                            {cards.slice(2, 4).map((item, index) => (
                                <Card data-aos="zoom-in"
                                    key={index}
                                    sx={{ height: '100%', transition: 'transform 0.3s ease-in-out', boxShadow: 'none', borderTopRightRadius: '20px', py: 1, background: 'linear-gradient(90deg, rgba(227,16,127,0.10136554621848737) 0%, rgba(236,236,236,0.6559873949579832) 70%)' }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" fontWeight={500}>{item.title}</Typography>
                                        <Typography variant="body1">{item.description}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
};

export default Banner;
