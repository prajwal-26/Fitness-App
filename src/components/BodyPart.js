import React from 'react'
import { Stack,Typography } from '@mui/material'
import cardlogo from '../assests/Images/cardlogo.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
   <Stack type='Button' 
   alignItems='center'
   justifyContent='center'
   className='bodyPart-card'
   sx={{
    borderTop:  bodyPart === item ? '4px solid #ff2625' : '',
    backgroundColor:'#fff',
    borderBottomLeftRadius:'20px',
    width:'20px',
    height:'280px',
    cursor:'pointer',
    gap:'47px'}
   }
  
  >
    <img src={cardlogo} alt='logo' style={{width:'80px' , height:'60px'}}/>
    <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
      {item}
    </Typography>

   </Stack> 
  )
}

export default BodyPart