import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Stack } from '@mui/material';
import './EmailForm.css';

function EmailForm () {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_5dqa4sl', 'template_lezhtd3', form.current, 'CgsOo1fthT7ChJF66')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset(); 
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <Container maxWidth='xl'>
        <Stack direction={{xs: "column", sm: "column" ,md: "row"}} spacing={2}>
            <Container sx={{
                display: 'flex',
                flexDirection: {xs: 'column',sm: 'column', md:'row'},
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <Container  sx={{
                display: 'flex',
                flexDirection: 'column',
                }}>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                    <label>Email</label>
                    <input type="email" name="user_email"/>
                </Container>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label>Message</label>
                    <textarea name="message"/>
                </Container>
            </Container>
        </Stack>
        <Container sx={{
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
            }}>
            <input type="submit" value="Send" />   
        </Container>  
        </Container>   
    </form>
  );
}
export default EmailForm;