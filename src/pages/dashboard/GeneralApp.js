import  Chats  from "./Chats";
import React,{Suspense,lazy} from "react";
import { Stack } from "phosphor-react";
import  Conversation  from "./Conversation";
import { Box } from "@mui/system";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const Cat =lazy(()=>import("../../components/Cat"))
const GeneralApp = () => {
  const { sideBar } = useSelector((state) => state.app);


  return (


    <>
        <div style={{width:"100%" ,display:"flex" ,justifyContent:"center",alignItems:"center"}}>
 

 <Chats />
 <Box sx={{height:"100%",width:"90%"  }}>

 <Conversation />
 </Box>

 {/* contact  */}
 {sideBar.open &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;
              default:
                break;
            }
          })()}
      




 </div>
    </>

  );
};

export default GeneralApp;
