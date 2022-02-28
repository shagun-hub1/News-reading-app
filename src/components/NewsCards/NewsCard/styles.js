import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles(theme=>({
    border:{
        border:'solid'
    },
    fullCardHeight:{
        height:'100%'
    },
    card:{
        display:'flex',
        flexDirection:'column',
        borderBottom:'10px solid white',
        justifyContent:'space-between'
    },
    active:{
        borderBottom: '10px solid #0a0a59'
    },
    grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
}))
export default useStyles