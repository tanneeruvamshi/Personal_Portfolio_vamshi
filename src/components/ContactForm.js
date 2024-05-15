import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';

const vibrantTheme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      color: '#666',
    },
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    });
    if (response.ok) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form after successful submission
    } else {
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <ThemeProvider theme={vibrantTheme}>
      <Box sx={{ minHeight: '100vh', padding: 8, background: 'linear-gradient(to right, #ffffff, #e3f2fd)' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ padding: 4, backgroundColor: 'background.paper', boxShadow: 3, borderRadius: 2, maxWidth: 500, width: '100%' }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: 'primary.main', marginBottom: 4, fontWeight: 'bold' }}>
                  Contact Me
                </Typography>
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xvoelkkl"
                  method="POST"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ marginBottom: 16 }}
                  >
                    <TextField
                      label="Name"
                      name="name"
                      type="text"
                      fullWidth
                      required
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ 
                        '& fieldset': { 
                          borderColor: 'primary.main',
                        }, 
                        '&:hover fieldset': { 
                          borderColor: 'secondary.main',
                        }, 
                        '&.Mui-focused fieldset': { 
                          borderColor: 'primary.main',
                        } 
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ marginBottom: 16 }}
                  >
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      required
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ 
                        '& fieldset': { 
                          borderColor: 'primary.main',
                        }, 
                        '&:hover fieldset': { 
                          borderColor: 'secondary.main',
                        }, 
                        '&.Mui-focused fieldset': { 
                          borderColor: 'primary.main',
                        } 
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ marginBottom: 16 }}
                  >
                    <TextField
                      label="Message"
                      name="message"
                      type="text"
                      fullWidth
                      required
                      variant="outlined"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ 
                        '& fieldset': { 
                          borderColor: 'primary.main',
                        }, 
                        '&:hover fieldset': { 
                          borderColor: 'secondary.main',
                        }, 
                        '&.Mui-focused fieldset': { 
                          borderColor: 'primary.main',
                        } 
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        marginTop: 2,
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        '&:hover': { backgroundColor: 'secondary.main' },
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;
