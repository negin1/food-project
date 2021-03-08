
import './App.css';
import Axios from 'axios';
import { useState} from 'react'; 
import Recipes from './Recipes';

function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])

  const YOUR_APP_ID = "32bc2449"
  const YOUR_APP_KEY = "9ef1915880741ff7a8a625dd89b7ec79"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;


  async function getRecipies(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault() 
    getRecipies();
  } 
 

  return (
    <div className="app">
      <h1>Food Recipies</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input 
          type="text"
          className="app__input"
          placeholder="enter ingredient" 
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search"/>
      </form>

       <div className="app__recipes">
        {recipes.map((recipe) => {
         return <Recipes recipe={recipe}/>;
        })}
      </div> 
    </div>
  );
}

export default App;