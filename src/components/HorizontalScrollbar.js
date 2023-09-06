import React from "react";
import { useContext } from "react";
import { Box ,Typography} from "@mui/material";
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BodyPart from "./BodyPart";

// const LeftArrow = () => {
//   const {scrollPrev} = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//        <ArrowBackIosIcon/> 
//     </Typography>
//   )
// }

// const RightArrow = () => {
//   const {scrollNext} = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//        <ArrowForwardIosIcon/>
//     </Typography>
//   )
// }
// LeftArrow={LeftArrow} RightArrow={RightArrow}
const HorizontalScrollbar = ({ data,bodypart,setBodyPart }) => {
  return (
    <div >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          
          <BodyPart  item={item} bodyparts={bodypart} setBodyPart={setBodyPart}/>
        
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
