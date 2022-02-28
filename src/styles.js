import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=>({
    heading:{
        textAlign:'center',
        margin:'2% 0',
        color:'#069747',

        '& .MuiTypography-h3 ':{
            fontStyle:'italic',
            color:'#de00ae'
        }
    }
}))