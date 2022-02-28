import React,{useEffect,useState} from "react"; 
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards/NewsCards";
import useStyles from './styles'
import { Typography } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";

const alanKey='21fbda36b3e89ad97cec0226734f24252e956eca572e1d8b807a3e2338fdd0dc/stage'

const App=()=> {

  const classes=useStyles()

  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle,setActiveArticle]=useState(-1)

  
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command==='newHeadlines'){      
          setNewsArticles(articles)
          setActiveArticle(-1)
        }else if(command==='highlight'){
          setActiveArticle((prev)=>prev+1)
          console.log(activeArticle)
        }else if(command==='open'){
          const parsedNumber=number.length > 2 ? wordsToNumbers(number,{fuzzy:true}) : number;
          const article=articles[parsedNumber-1]

          if(parsedNumber >20){
            alanBtn().playText('Please try that again')
          }else if(article){
            window.open(article.url,'_blank')
          }

        }
      }
    })
  },[])

  return (
   <>
   <div>
      <div className={classes.heading}> 
     <Typography variant="h3">News Reading App</Typography>
     </div> 
     <NewsCards articles={newsArticles} activeArticle={activeArticle} />
   </div>
   </>
  );
}

export default App;
