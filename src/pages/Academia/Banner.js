
import React, { useState } from 'react';
import { Box, Container, Grid, Stack, Typography, Card, CardContent, Button } from '@mui/material';
import { FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';

const universitiesData = [
    {
        title: 'Collaborative Partnerships',
        description: 'Bridge industry and academia for mutually beneficial collaborations and innovative solutions.'
    },
    {
        title: 'Research Alignment Support',
        description: 'Assist universities in conducting relevant research aligned with industry demands and advancements.'
    },
    {
        title: 'Funding Access',
        description: 'Aid in securing competitive funding for innovative projects, ranging from $15,000 to $120,000.'
    }
];

const studentData = [
    {
        title: 'Internship Opportunities',
        description: 'Gain real-world experience through internships with partner organizations for skill enhancement.'
    },
    {
        title: 'Accelerated Learning Programs',
        description: 'Accelerate student learning with real-world experiences and funding opportunities via internships.'
    },
    {
        title: 'Skills Enhancement Workshops',
        description: 'Participate in workshops to develop industry-relevant skills and boost employability.'
    }
];


const professorData = [
    {
        title: 'Collaborative Research',
        description: 'Facilitate joint projects between industry and academia for innovative solutions and knowledge exchange.'
    },
    {
        title: 'Industry Advisory Role',
        description: 'Engage professors in advisory boards, guiding curriculum development and research priorities for industry relevance.'
    },
    {
        title: 'Professional Growth',
        description: 'Offer workshops and seminars to enhance teaching, research techniques, and industry relevance for career advancement.'
    }
];


const Banner = () => {
    const [visibleSection, setVisibleSection] = useState('universities');

    const buttonStyle = (activeColor, inactiveColor) => ({
        color: '#FFF',
        bgcolor: visibleSection === activeColor ? '#D31480' : inactiveColor,
        gap: '15px',
        '&:hover': {
            bgcolor: visibleSection === activeColor ? '#D31480' : inactiveColor,
        },
    });

    const headings = {
        universities: 'Empowering Universities with BLUMIN',
        students: 'Empowering Students with BLUMIN',
        professors: 'Empowering Professors with BLUMIN',
    };


    return (
        <Stack py={12}>
            <Container>
                <Box color={'#074B65'} mb={4}>
                    <Typography variant="h4" fontWeight={500}>Academia</Typography>
                    <Typography pt={0.2} variant="h6">Bridging the Gap Between Industry and Academia</Typography>
                </Box>

                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} my={4}>
                    <Button
                        variant="contained"
                        onClick={() => setVisibleSection('universities')}
                        sx={{ ...buttonStyle('universities', '#206498'), borderRadius: '10px 0 0' }}
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
                        sx={{ ...buttonStyle('professors', '#206498'), borderRadius: '0 0 10px' }}
                        endIcon={<FaChalkboardTeacher size={30} color="#FFF" />}
                    >
                        Professors
                    </Button>

                </Stack>

                <Typography variant="h5" color="#074B65" fontWeight={500} mt={8} mb={2}>{headings[visibleSection]}</Typography>

                <Grid container spacing={4}>
                    {visibleSection === 'universities' && (
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {universitiesData.map((item, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Card sx={{ height: '100%', transition: 'transform 0.3s ease-in-out', boxShadow: 'none', borderRadius: '20px 0', py: 1, background: 'linear-gradient(90deg, rgba(227,16,127,0.10136554621848737) 0%, rgba(236,236,236,0.6559873949579832) 70%)' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" fontWeight={500}>{item.title}</Typography>
                                                <Typography variant="body1">{item.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )}

                    {visibleSection === 'students' && (
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {studentData.map((item, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Card sx={{ height: '100%', transition: 'transform 0.3s ease-in-out', boxShadow: 'none', borderRadius: '20px 0', py: 1, background: 'linear-gradient(250deg, rgba(227,16,127,0.10136554621848737) 0%, rgba(236,236,236,0.6559873949579832) 70%)' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" color={'#074B65'} fontWeight={500}>{item.title}</Typography>
                                                <Typography variant="body1">{item.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )}

                    {visibleSection === 'professors' && (
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {professorData.map((item, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Card sx={{ height: '100%', transition: 'transform 0.3s ease-in-out', boxShadow: 'none', borderRadius: '20px 0', py: 1, background: 'linear-gradient(90deg, rgba(227,16,127,0.10136554621848737) 0%, rgba(236,236,236,0.6559873949579832) 70%)' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" color={'#074B65'} fontWeight={500}>{item.title}</Typography>
                                                <Typography variant="body1">{item.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Stack>
    );
};

export default Banner;



// import React, { useState, useEffect } from 'react';
// import { Box, Container, Grid, Stack, Typography, Card, CardContent } from '@mui/material';
// import { FaUniversity } from "react-icons/fa";
// import { PiStudentFill } from "react-icons/pi";
// import { FaChalkboardTeacher } from "react-icons/fa";

// const universitiesData = [
//     {
//         title: 'Facilitating Collaboration',
//         description: 'Act as a bridge between industry and academic institutions to establish mutually beneficial partnerships.'
//     },
//     {
//         title: 'Enhancing Research Excellence',
//         description: 'Support universities in conducting relevant research aligned with industry needs.'
//     },
//     {
//         title: 'Access to Funding and Resources',
//         description: 'Assist in securing competitive funding ranging from $15,000 to $120,000 for innovative projects.'
//     }
// ];

// const studentData = [
//     {
//         title: 'Internship Programs',
//         description: 'Opportunities for students to gain invaluable real-world experience through internships with partner organizations.'
//     },
//     {
//         title: 'Accelerate Programs',
//         description: 'Accelerate program for students in any discipline, offering real-world experience and funding opportunities through internships.'
//     },
//     {
//         title: 'Career Development',
//         description: 'Skills training workshops to develop industry-relevant skills and enhance employability.'
//     }
// ];

// const professorData = [
//     {
//         title: 'Research Collaborations',
//         description: 'Facilitate joint research projects between companies and academic institutions.'
//     },
//     {
//         title: 'Industry Advisory Support',
//         description: 'Engage professors in industry advisory boards to guide curriculum development and research priorities.'
//     },
//     {
//         title: 'Professional Development',
//         description: 'Workshops and seminars to enhance teaching methodologies, research techniques, and industry relevance.'
//     }
// ];

// const Banner = () => {
//     const [activeIcon, setActiveIcon] = useState('university');
//     const [activeData, setActiveData] = useState(universitiesData);
//     const [isHovered, setIsHovered] = useState(false);
//     const [transitioning, setTransitioning] = useState(false);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             if (!isHovered) {
//                 setTransitioning(true); // Set transitioning to true
//                 setTimeout(() => {
//                     if (activeIcon === 'university') {
//                         setActiveIcon('student');
//                         setActiveData(studentData);
//                     } else if (activeIcon === 'student') {
//                         setActiveIcon('professor');
//                         setActiveData(professorData);
//                     } else if (activeIcon === 'professor') {
//                         setActiveIcon('university');
//                         setActiveData(universitiesData);
//                     }
//                     setTransitioning(false); // Set transitioning back to false after data change
//                 }, 500); // Delay the data change
//             }
//         }, 5000);

//         return () => clearInterval(intervalId);
//     }, [activeIcon, isHovered]);

//     const getActiveIconColor = () => 'red'; // Simplified color function

//     const handleIconHover = (icon) => {
//         setIsHovered(true);
//         switch (icon) {
//             case 'university':
//                 setActiveData(universitiesData);
//                 break;
//             case 'student':
//                 setActiveData(studentData);
//                 break;
//             case 'professor':
//                 setActiveData(professorData);
//                 break;
//             default:
//                 setActiveData([]);
//                 break;
//         }
//     };

//     const handleIconLeave = () => {
//         setIsHovered(false);
//     };

//     return (
//         <Stack py={12}>
//             <Container>
//                 <Box color={'#074B65'} mb={4}>
//                     <Typography variant="h3" fontWeight={600}>Academia</Typography>
//                     <Typography pt={1} variant="h5">Bridging the Gap Between Industry and Academia</Typography>
//                 </Box>
//                 <Grid container spacing={1}>
//                     <Grid item xs={12} pb={8}>
//                         <Stack direction={'row'} justifyContent={'space-around'}>
//                             <Box textAlign="center">
//                                 <FaUniversity
//                                     style={{
//                                         fontSize: '4rem', cursor: 'pointer',
//                                         color: activeIcon === 'university' ? getActiveIconColor() : '#000000',
//                                     }}
//                                     onMouseEnter={() => handleIconHover('university')}
//                                     onMouseLeave={handleIconLeave}
//                                 />
//                                 <Typography variant="h6">University</Typography>
//                             </Box>
//                             <Box textAlign="center">
//                                 <PiStudentFill
//                                     style={{
//                                         fontSize: '4rem', cursor: 'pointer',
//                                         color: activeIcon === 'student' ? getActiveIconColor() : '#000000',
//                                     }}
//                                     onMouseEnter={() => handleIconHover('student')}
//                                     onMouseLeave={handleIconLeave}
//                                 />
//                                 <Typography variant="h6">Student</Typography>
//                             </Box>
//                             <Box textAlign="center">
//                                 <FaChalkboardTeacher
//                                     style={{
//                                         fontSize: '4rem', cursor: 'pointer',
//                                         color: activeIcon === 'professor' ? getActiveIconColor() : '#000000',
//                                     }}
//                                     onMouseEnter={() => handleIconHover('professor')}
//                                     onMouseLeave={handleIconLeave}
//                                 />
//                                 <Typography variant="h6">Professor</Typography>
//                             </Box>
//                         </Stack>

//                     </Grid>

//                     <Grid item xs={12}>
//                         <Grid container spacing={2}>
//                             {activeData.map((item, index) => (
//                                 <Grid item sm={4} key={index}>
//                                     <Card
//                                         sx={{
//                                             height: '100%',
//                                             transition: 'transform 0.4s ease-in-out,D31480ty 0.4s ease-in-out', // Added opacity transition
//                                             transform: transitioning ? 'translateY(-20px)' : 'translateY(0)', // Moved cards up when transitioning
//                                             opacity: transitioning ? 0 : 1, // Fade out when transitioning
//                                         }}
//                                     >
//                                         <CardContent>
//                                             <Typography variant='h6'> {item.title} </Typography>
//                                              <Typography variant="body1"> {item.description} </Typography>
//                                         </CardContent>
//                                     </Card>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Stack>
//     );
// }

// export default Banner;
