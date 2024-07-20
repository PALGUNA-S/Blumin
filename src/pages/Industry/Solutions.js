import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Industry from '../../assets/Industry.jpeg';

const Solutions = () => {
    const accordionContent = [
        {
            title: 'Global Connections',
            content: 'BLUMINAccess global networks for talent, partnerships, and funding. Partnerships with governments, incubators, and key companies.',
        },
        {
            title: 'Innovators Community',
            content: 'Collaborative model with top researchers. Flexible project plans and shared talent investments.',
        },
        {
            title: 'Business Innovation',
            content: 'Embrace challenges, boost ROI in R&D. Connect with global expertise for projects.',
        },
        {
            title: 'Building the Right Team',
            content: 'Find expertise before job postings. Consider interns for reduced risk. Align strategy with talent needs.',
        },
        {
            title: 'Talent Solutions',
            content: '100+ advisors for support. Identify and recruit skilled talent.',
        },
        {
            title: 'Guidance from Start to Finish',
            content: 'Receive guidance at every project stage.',
        },
        {
            title: 'Budget Efficiency',
            content: 'Seek funding support through IIC. Leverage investments for expanded budgets.',
        },
        // Additional items
        {
            title: 'Customer Satisfaction',
            content: 'Ensure customer satisfaction through innovative solutions and exceptional service.',
        },
        {
            title: 'Market Expansion',
            content: 'Expand market reach by identifying new opportunities and implementing effective strategies.',
        },
        {
            title: 'Digital Transformation',
            content: 'Drive digital transformation initiatives for improved efficiency and competitive advantage.',
        },
        {
            title: 'Product Development',
            content: 'Accelerate product development cycles and enhance product offerings.',
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleChange = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };
    return (
        <Box py={5} sx={{ overflowX: 'hidden' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box mb={4} color={'#043D62'} textAlign={'center'}>
                            <Typography variant="h4" fontWeight={500}>Our Industry Solutions</Typography>
                            <Typography variant="h6" pt={0.2}>
                                Innovative Approaches for Industrial Growth
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" item xs={12} md={5} container justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }} >
                        <img src={Industry} alt="Industry-img" style={{ maxWidth: '100%', height: 'auto', borderRadius: '0 30px 0 30px' }} />
                    </Grid>

                    <Grid item xs={12} md={7} data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        {accordionContent.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expandedIndex === index}
                                onChange={() => handleChange(index)}
                                sx={{ borderRadius: 0, boxShadow: '5px 5px 10px 2px #dddddd' }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}a-content`}
                                    id={`panel${index + 1}a-header`}
                                >
                                    <Typography variant="h6">{item.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.content}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Solutions