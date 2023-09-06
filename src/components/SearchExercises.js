import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData,exerciseoptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExercises = ({searchExercises,bodyPart,setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setbodyParts] = useState([])

    useEffect(() => {
    const fetchExerciseData = async () =>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseoptions);
    setbodyParts(['all',...bodyPartsData]);
    }
    
     fetchExerciseData();
      
    }, [])
    

    const handleSearch = async () => {
        if (search) {
         const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseoptions);
         
         const searchExercises = exercisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search)
         )
         setSearch('');
        //  setexercises(searchExercises);
        }
    }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Exercises you <br />
        Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "70px",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="Search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setbodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
