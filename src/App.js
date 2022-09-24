import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Coin from './Component/Coin';
import Swipe from './Swipe';
import { NavLink } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {

  const[listOfCoins,setListOfCoins] = useState([]);
  const[searchWord , setSearchWord] = useState("");

  useEffect(() => {

    Axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1").then((res) => {
      setListOfCoins(res.data.data);
    });

  },[]);

  const filterCoins = listOfCoins.filter((coin) => {
    return coin.anime_name.toLowerCase().includes(searchWord.toLocaleLowerCase());
  }); 

  return (
    <div className="App">

    <div className='nav'>
      <img class="i1" src='https://static.displate.com/280x392/displate/2019-09-23/50c189d097b2ce39a9f4006ff3cd222a_9dbba44abad891745249096f078be697.jpg' alt=''/>
      <div className='headng'> ANIME FACTS</div>
      <a class="ar1" href="https://twitter.com/anitrendz"><TwitterIcon/></a>
      <a class="ar1" href="https://twitter.com/anitrendz"><InstagramIcon /></a>
      <a class="ar1" href="https://twitter.com/anitrendz"><FacebookIcon /></a>
      <a class="ar1" href="https://twitter.com/anitrendz"><LinkedInIcon /></a>
      <div className="animeHeader">
        <input type="text" placeholder="Enter anime name" onChange={(event) => {
          setSearchWord(event.target.value);
        }}/>  
      </div>
    </div>

    <div className="gith"> If you wanna learn more about this website , check out my repository on <a href="https://github.com/Akilan19"> Github </a> account.</div>
      
      <div className="swipe">
          <Swipe />
      </div> 

      <div className="animeDisplay">{filterCoins.map((coin) => {
        return <Coin id={coin.anime_id} name={coin.anime_name} icon={coin.anime_img}/>
      })}</div>
    </div>
  );
}

export default App;
