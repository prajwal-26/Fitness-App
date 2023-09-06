import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  const [bodypart, setBodypart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises}
        bodyPart={bodypart}
        setBodypart={setBodypart}/>
        
        <Exercises setExercises={setExercises}
        bodyPart={bodypart}
        setBodypart={setBodypart}/>
    </Box>
  )
}

export default Home