import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '20px' } }} p='20px'>

      <Typography variant='h4' mb='33px'>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise tutorial videos
      </Typography>

      <Stack alignItems='center' justifyContent='flex-start' flexWrap='wrap'
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '110px' }}}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'//to open in new tab
            rel='noreferrer'//bcoz of target
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '400px', height: '300px' }} />

            <Box>
              <Typography variant='h5' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h7' color='#000' >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>

    </Box>
  )
}

export default ExerciseVideos