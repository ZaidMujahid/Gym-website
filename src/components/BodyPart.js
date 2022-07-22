import React from 'react'
import { Stack, Typography } from '@mui/material'   

import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: { lg: '270px', xs: '100px'},
            height: { lg: '270px', xs: '230px'},
            cursor: 'pointer',
            gap: '45px'
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={Icon} alt="dumbell" style={{
            width: '40px', height: '40px'
        }} />
        <Typography  fontWeight="bold" color="#3A1212" textTransform="capitalize" sx={{fontSize: {lg: "24px", xs: '15px'}}}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart