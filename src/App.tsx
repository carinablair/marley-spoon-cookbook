import { useEffect, useState } from 'react';
import './App.css';
import { createClient } from 'contentful';

function App() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID!,
      environment: process.env.REACT_APP_ENVIRONMENT_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN!
    })

    client.getEntries({
      content_type: 'recipe'
    })
      .then((response) => {
        setRecipes(response.items)
        console.log(response.items)
      })
      .catch(console.error)
  }, [])

  return (
    <div className="App">
      <h2>Recipes</h2>
      <ul>{recipes.map(recipe => <li>{recipe.fields.title}</li>)}</ul>
    </div>
  );
}

export default App;
