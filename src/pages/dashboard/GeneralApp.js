import  Chats  from "./Chats";
import React,{Suspense,lazy} from "react";
import { Stack } from "phosphor-react";
import  Conversation  from "./Conversation";
import { Box } from "@mui/system";

const Cat =lazy(()=>import("../../components/Cat"))
const GeneralApp = () => {

  return (


    <>
        <div style={{width:"100%" ,display:"flex" ,justifyContent:"center",alignItems:"center"}}>
 

 <Chats />
 <Box sx={{height:"100%",width:"90%"}}>

 <Conversation />
 </Box>



 </div>
    </>

  );
};

export default GeneralApp;
