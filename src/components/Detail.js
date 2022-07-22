import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail}) => {
  //destructring of exerciseDetail
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]

  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} className='detail-image'/>
      <Stack sx={{ gap: {lg:'35px', xs:'20px'}}}>
        <Typography variant='h3' textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keeps you strong and healthy. {name} {` `}
          is one of the best exercises to target your {target}. <br/> It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) =>(
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <img src={item.icon} alt={bodyPart}/>
            <Typography variant='h6' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail