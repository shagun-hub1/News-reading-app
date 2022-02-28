import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=>({
    container:{
        width:'100%',
        padding:'0 5%',
        margin:'0'
    },
    card:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      alignContent:'center',
      width:'100%',
      height:'50vh',
      padding:'10%',
      borderRadius:'10px',
      color:'white'
    },
   infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
   }

}))