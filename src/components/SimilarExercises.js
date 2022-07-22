import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentMuscleExercises}) => {
  return (
    <Box sx={{ mt: '100px'}}>
      <Typography variant='h4' mb={5}>Similar <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>muscle group</span> exercises</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? 
        <HorizontalScrollBar data={targetMuscleExercises}/>
        : <Loader />}
      </Stack>
      <Typography variant='h4' mb={5}>Similar <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>equipment</span> exercises</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {equipmentMuscleExercises.length ? 
        <HorizontalScrollBar data={equipmentMuscleExercises}/>
        : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises