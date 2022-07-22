import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const Search = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData])//(...)->spread all the body parts data
    }
    fetchExercisesData();//we wanna call it immediately as soon as the app loads
  }, [])


  const handleSearch = async () => {// async means it fetches some data, it means it will take time here we'll fetch from API
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);//takes 2 params.

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
    }
  }


  return (
    <Stack alignItems="center" jusifycontent="center" p="20px" mt="30px">
      <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px' textAlign="center" >
        Sweat is just fat crying <br /> Lets Start!
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '40px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}//every input needs to have a value
          onChange={(e) => setSearch(e.target.value.toLowerCase())}//every input needs to have onChange property
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',//bcoz we are using absolute we have to use right property otherwise search bar shifts to more right
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      {/* Box for horizontal scroll bar for exercises list */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts}
          bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default Search