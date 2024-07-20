// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { Box, CardContent, CardMedia, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
// import React from 'react';
// import Ceo from '../../assets/TeamMember.png';

// const teamMembers = [
//     {
//         firstName: 'Madhusudhan',
//         lastName: 'Reddy Y V T',
//         designation: 'CEO',
//         linkedIn: '#'
//     },
//     {
//         firstName: 'Hari',
//         lastName: 'Ambati',
//         designation: 'CTO',
//         linkedIn: '#'
//     },
//     {
//         firstName: 'M Venkat',
//         lastName: 'Rao',
//         designation: 'CFO',
//         linkedIn: '#'
//     }
// ];

// const Team = () => {
//     return (
//         <Box py={5}>
//             <Container>
//                 <Box textAlign="center" color={'#074B65'} mb={4}>
//                     <Typography variant="h4" fontWeight={500}>Meet Our Leadership</Typography>
//                     <Typography variant="h6" pt={0.2} >Discover the visionaries driving innovation and excellence.</Typography>
//                 </Box>
//                 <Grid container spacing={4}>
//                     {teamMembers.map((member, index) => (
//                         <Grid item key={index} xs={12} sm={6} md={4}>
//                             <Stack
//                                 spacing={1}
//                                 sx={{
//                                     background: '#fff',
//                                     borderRadius: '20px 0 20px 0',
//                                     transition: 'box-shadow 0.3s ease-in-out',
//                                     '&:hover': {
//                                         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
//                                     }
//                                 }}
//                             >
//                                 <CardMedia
//                                     component="img"
//                                     src={Ceo}
//                                     alt={`${member.firstName} ${member.lastName}`}
//                                     sx={{
//                                         width: '100%',
//                                         transition: 'filter 0.5s ease-in-out',
//                                         '&:hover': {
//                                             filter: 'grayscale(100%)',
//                                         }
//                                     }}
//                                 />
//                                 <CardContent>
//                                     <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
//                                         <Typography variant="h6" fontWeight={600}>
//                                             <span style={{ color: '#D31480' }}>{member.firstName}</span>{' '}
//                                             <span style={{ color: '#074B65' }}>{member.lastName}</span>
//                                         </Typography>
//                                         <IconButton
//                                             component="a"
//                                             href={member.linkedIn}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             sx={{ color: '#4682b4' }}
//                                         >
//                                             <LinkedInIcon />
//                                         </IconButton>
//                                     </Stack>

//                                     <Typography variant="body1" color="textSecondary">
//                                         {member.designation}
//                                     </Typography>
//                                 </CardContent>
//                             </Stack>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };

// export default Team;


import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const teamHighlights = [
    {
        title: 'Innovative Leaders',
        description: 'Our leadership team comprises forward-thinking individuals who constantly drive innovation and excellence in the industry.'
    },
    {
        title: 'Industry Experts',
        description: 'With decades of combined experience, our team members are recognized as experts in their respective fields, ensuring top-notch solutions.'
    },
    {
        title: 'Collaborative Spirit',
        description: 'We foster a culture of collaboration and teamwork, allowing us to leverage diverse perspectives and skills to achieve our goals.'
    }
];

const Team = () => {
    return (
        <Box py={5}>
            <Container>
                <Box textAlign="center" color={'#074B65'} mb={4}>
                    <Typography variant="h4" fontWeight={500}>Meet Our Leadership</Typography>
                    <Typography variant="h6" pt={0.2}>Discover the visionaries driving innovation and excellence.</Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 4 }}>
                    {teamHighlights.map((highlight, index) => (
                        <Grid item key={index} xs={12} md={4}>
                            <Card sx={{
                                background: '#fff',
                                borderRadius: '20px 0 20px 0',
                                transition: 'box-shadow 0.3s ease-in-out',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                }
                            }}>
                                <CardContent>
                                    <Typography variant="h5" fontWeight={600} color={'#D31480'} mb={2}>
                                        {highlight.title}
                                    </Typography>
                                    <Typography variant="body1" color="#074B65">
                                        {highlight.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Team;
