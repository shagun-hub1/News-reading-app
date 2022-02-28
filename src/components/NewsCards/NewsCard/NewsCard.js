import React,{useState,useEffect,createRef} from 'react'
import { Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography } from '@material-ui/core'
import useStyles from './styles'
import classNames from 'classnames'

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle}) => {
    //console.log(activeArticle)
    
    const [elRefs,setElRefs]=useState([])
    const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-40);

    useEffect(()=>{
        setElRefs((refs)=>Array(20).fill().map((_,j)=> refs[j] || createRef()))
    },[])

    useEffect(()=>{
        if(i===activeArticle && elRefs[activeArticle]){
                scrollToRef(elRefs[activeArticle])
        }

    },[i,activeArticle,elRefs])
    const classes=useStyles()
    return (
        <>
            <Card ref={elRefs[i]} key={i} className={classNames(classes.card,activeArticle===i ? classes.active : null)  }>
                <CardActionArea href={url} target='_blank'>
                    <CardMedia
                    style={{height:'170px'}}
                    image={urlToImage}
                    />
                    <div className={classes.details}>
                    <Typography variant='subtitle2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='subtitle2' color='textSecondary' component='h2'>{source.name}</Typography>
                    </div>
                    <Typography className={classes.title} gutterBottom variant='subtitle1'><strong> {title}</strong></Typography>
                    <CardContent>
                        <Typography variant='subtitle2' color='textSecondary'  >{description}</Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary'>Learn More</Button>
                    <Typography variant='h5' color='textSecondary' >{i+1}</Typography>
                </CardActions>
            </Card>
        </>
    )
}

export default NewsCard
