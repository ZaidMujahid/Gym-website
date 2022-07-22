import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material';
import logo from '../assets/images/logo.png';


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="none" sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}}} px='20px' >{/* mt => margin top */}
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: '70px', height: '70px', margin: '0 10px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        margin="20px 0px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#FF2625', borderBottom: '3px solid #212121'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#FF2625'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar