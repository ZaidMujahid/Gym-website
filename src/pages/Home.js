import React, { useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercises from '../components/Exercises'


const Home = () => {
  //the reason for having this in home page is that the change is gonna reflect all over, not only on Exercises page.
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]) 

  return (
    <Box>
      <HeroBanner />
      <Search 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart} 
      />
      <Exercises
      exercises={exercises} 
      setExercises={setExercises}
      bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home