import React from "react";
import { Container, Stack, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './BottomNav.css';

class BottomBar extends React.Component{
    render() {

    return (
        <div className="bottom-bar" >
            <Stack direction={{xs: 'column', sm:"column", md:"row"}} spacing={{ xs: 1,sm: 1, md:8 }} style={{
                width: '100%',
                display: 'flex',
                padding: '0px auto',
                marginLeft: 'auto',
                marginRight: 'auto',               
            }}>
                <Container sx={{
                width: {xs: 'xs', sm: 'xs', md: '30%'},
                display : 'flex',
                flexDirection: 'column',
                marginTop: {xs: '10px', sm:'10px', md: '10px'},
                marginLeft: {xs: '0', sm: '0', md: '10%'},
                textAlign: 'initial',
                }}>
                    <Typography variant="h6" sx={{color: 'white'}}>Address</Typography>
                    <Typography variant="body2" sx={{
                        marginTop: '20px',
                        color: 'white',
                    }}>Jl. Raya Cijujung Blok.C-16 Sukaraja, Kab. Bogor, Jawa Barat, Indonesia (16710)</Typography>
                    
            </Container>
            <Container sx={{
                width: {xs: 'xs', sm: 'xs', md: '30%'},
                display : 'flex',
                flexDirection: 'column',
                textAlign: 'initial',
                }}>
                    <Typography variant="h6" sx={{color: 'white'}}>Contacts</Typography>
                    <Typography variant="body2"sx={{
                        marginTop: '20px',
                        color: 'white',
                    }}>arengasugarindo@gmail.com </Typography>
                    <Typography variant="body2" sx={{ color: 'white',}}>info@arengasugarindo.com</Typography>
                    <Typography variant="body2" sx={{ color: 'white',}}>Whatsapp : +62 812 8826 2036</Typography>
            </Container>
            <Container  sx={{
                width: {xs: 'xs', sm: 'xs', md: '30%'},
                display : 'flex',
                flexDirection: 'column',
                paddingBottom: {xs: '10px', sm:'10px', md: '0'},
                textAlign: 'initial',
                }}>
                    <Typography variant="h6" sx={{
                        marginBottom: '20px',
                        color: 'white',
                    }}>Social Media</Typography>
                    <Container disableGutters>
                        <Link href="https://instagram.com/arengasugarindo?igshid=YmMyMTA2M2Y=" target="blank">
                            <InstagramIcon sx={{color: 'white', paddingRight: '10px'}}/>
                        </Link> 
                        <Link href="https://www.linkedin.com/company/indo-export-group/" target="blank">
                            <LinkedInIcon sx={{color: 'white'}}/>
                        </Link>
                    </Container>
                                        
            </Container>
            
           </Stack>
           <Typography variant="body2" sx={{marginTop: {xs:'10xp',sm:'20px',md: '50px'},left:{xs:'5%',sm:'5%',md:'10%'}, color: 'white'}}>© 2022 Arenga Sugar Indo. All rights reserved</Typography>
        </div>
    );
}
}
export default BottomBar;