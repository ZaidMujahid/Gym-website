import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner3.jpg'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Your Gym Partner
      </Typography>
      <Typography  fontWeight="600" 
      sx={{ fontSize:{ lg: "40px", xs: '35px' }}} mb="23px" mt="30px" >
        Sweat, Build <br /> and Repeat
      </Typography>
      <Typography color="#212121" fontSize="30px" lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>
      <Typography
      fontWeight={600}
      color="#ff2625"
      sx={{
        opacity: 0.2,
        display: { lg: 'block', xs: 'none'}
      }}
      fontSize="200px"
      pt="40px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" 
      className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner