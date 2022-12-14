import { Container } from '@mui/system';
// import { withStyles } from '@mui/styles';
// import Switch from '@mui/material/Switch';
// import { grey} from '@mui/material/colors';
import axios from 'axios';
import { useEffect,useState} from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// import { makeStyles } from '@mui/material';




function App() {
const [word,setWord]=useState("")
  const [meanings, setMeanings] = useState([])
  const[category,setCategory]=useState("en")
  // const [LightTheme, setLightTheme] = useState(false);

  // const Darkmode = makeStyles({
  //   switchBase: {
  //     color: grey[50],
  //     "&$checked": {
  //       color: grey[900],
  //     },
  //     "&$checked + $track": {
  //       backgroundColor: grey[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);

  const dictionaryapi=async()=>{
    try{
const data =await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
// console.log(data)
setMeanings(data.data)
    }
    catch(error){
console.log(error)
    }
  }
  console.log(meanings)
  useEffect(()=>{
    dictionaryapi()
// eslint-disable-next-line 
  },[word,category])
  return <div className='App' style={{height:'100vh',backgroundColor:"#282c34",color:"white"}}>
    <Container maxWidth="md"  style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}>
    <div style={{position:"absolute",top:0,right:15,paddingTop:10}}>
    {/* <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <Darkmode
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          /> */}
        
      </div>
    <Header setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
    />
    {meanings && (
    <Definitions word={word} meanings={meanings} category={category}/>
    )}
    </Container>
    <Footer/>
  </div>
}

export default App;
