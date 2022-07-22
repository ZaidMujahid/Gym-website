import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ( {exercise} ) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name}/>
        <Stack direction='row'>
            <Typography ml='20px' color='#ffa9a9' fontWeight='bold' pt='30px' textTransform='capitalize' fontSize='20px'>
                {exercise.bodyPart}
            </Typography>

            <Typography ml='20px' color='#fcc757' fontWeight='bold'    pt='30px' textTransform='capitalize' fontSize='20px'>
                {exercise.target}
            </Typography>

        </Stack>
        <Typography ml='20px' color='#000' fontWeight='bold' pt='30px'
        pb='0px' textTransform='capitalize' fontSize='20px'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard 