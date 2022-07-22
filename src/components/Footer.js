import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ffa9a9">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack> */}
    {/* <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="10px" pt='10px'>Write me at - <a href="gmail.com">zaidmujahid270@gmail.com</a></Typography> */}
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="10px" pt='10px'>Copyright &copy; YourGymPartner.com</Typography>
  </Box>
  )
}

export default Footer

