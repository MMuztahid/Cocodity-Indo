import React from "react";
import { Typography, Container, Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FP1 from '../media/foto18.webp';
import FP2 from '../media/foto19.webp';
import FP3 from '../media/foto20.webp';

export const FP = (props) => {
    return (
    
        <Container maxWidth="lg"sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
        }}>
            <Container sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
                <img src={FP1} alt="Founder Arenga Sugar Indo" width={'200px'} height={'200px'}/>
                <Typography variant="h6" sx={{
                fontFamily: `Calibri`,
                marginTop: '40px',
                color: 'black'
                }}>Khairina Larasati </Typography>
                <Typography variant="body1" sx={{
                fontFamily: `Calibri`,
                color: 'black',
                fontWeight: '600'
                }}>Founder</Typography>
                <Container sx={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                    <Link href="https://www.instagram.com/khairinalarasati/" target="blank" display={'inline'}>
                        <InstagramIcon sx={{color: 'black', marginRight: '10px'}}/>
                    </Link> 
                    <Link href="https://www.linkedin.com/in/khairina-larasati/" target="blank" display={'inline'}>
                        <LinkedInIcon sx={{color: 'black'}}/>
                    </Link> 
                </Container> 
            </Container>
            <Container sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
                <img src={FP2} alt="Co-Founder Arenga Sugar Indo" width={'200px'} height={'200px'}/>
                <Typography variant="h6" sx={{
                fontFamily: `Calibri`,
                marginTop: '40px',
                color: 'black'
                }}>M Wali Jamhuri Siregar </Typography>
                <Typography variant="body1" sx={{
                fontFamily: `Calibri`,
                color: 'black',
                fontWeight: '600'
                }}>Co-Founder</Typography>
                <Container sx={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                    <Link href="https://instagram.com/walijamhuri?igshid=YmMyMTA2M2Y=" target="blank" display={'inline'}>
                        <InstagramIcon sx={{color: 'black', marginRight: '10px'}}/>
                    </Link> 
                    <Link href="https://www.linkedin.com/in/muhammad-wali-jamhuri-siregar-a6b21b14b" target="blank" display={'inline'}>
                        <LinkedInIcon sx={{color: 'black'}}/>
                    </Link> 
                </Container>
            </Container>
            <Container sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
                <img src={FP3} alt="General Manager Arenga Sugar Indo" width={'250px'} height={'220px'}/>
                <Typography variant="h6" sx={{
                fontFamily: `Calibri`,
                marginTop: '40px',
                color: 'black'
                }}>M Gevin Hutama Ernawan </Typography>
                <Typography variant="body1" sx={{
                fontFamily: `Calibri`,
                color: 'black',
                fontWeight: '600'
                }}>General Manager</Typography>
                <Container sx={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                    <Link href="https://www.instagram.com/gevinernawan/" target="blank" display={'inline'}>
                        <InstagramIcon sx={{color: 'black', marginRight: '10px'}}/>
                    </Link> 
                    <Link href="" target="blank" display={'inline'}>
                        <LinkedInIcon sx={{color: 'black'}}/>
                    </Link> 
                </Container>
            </Container>
            </Container>
    );
}
