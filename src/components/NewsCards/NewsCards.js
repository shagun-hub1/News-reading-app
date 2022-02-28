import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles'
import { Grid,Typography,Grow } from '@material-ui/core'
import Home from '../Home/Home'


 
const NewsCards = ({articles,activeArticle}) => {
    console.log(activeArticle)
    const classes=useStyles()

  //  console.log(articles)
    if(!articles.length){
        return (<><Home/></>)
    }
    return (
        <>
        <Grow in> 
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {articles.map((article,i)=>(
                <Grid key={i} item xs={12} sm={6} md={4} lg={4} xl={4} style={{display:'flex'}}>
                <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                </Grid>
            ))}
        </Grid>
        </Grow>
        </>
    )
}

export default NewsCards
