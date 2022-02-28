import { Grid, Grow, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Home = () => {
    const classes=useStyles()
    const infoCards=[
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Show me the  news on PlayStation 5' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    ]
    
    return (
        <>
        <Grow in> 
           <Grid container spacing={3} alignItems='stretch' className={classes.container}>
                {infoCards.map((infocard,i)=>(
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}  >
                        <div className={classes.card} style={{backgroundColor:infocard.color}}>
                             <Typography variant='h6'>{infocard.title}</Typography>
                                <br />
                             {infocard.info ? 
                             (
                            <Typography variant='body1'>
                                <strong>
                                    {infocard.title.split(' ')[2]}:
                                </strong>
                                    <br/>
                                    {infocard.info}
                                    </Typography> 
                             )
                            : null
                        }
                        <br/>
                        <Typography variant='subtitle1'>Try Saying: <br/> <i>{infocard.text}</i></Typography>
                             
                        </div>
                    </Grid>
                ))}
           </Grid>
        </Grow>
        </>
    )
}

export default Home
