import { useEffect, useState } from 'react';
import './App.css';
import { createClient } from 'contentful';
import { RecipeListItem } from './components/RecipeListItem';

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
      })
      .catch(console.error)
  }, [])
  return (
    <div className="App">
      <h2>Recipes</h2>
      <ul>{recipes.map(recipe =>
        <li key={recipe.sys.id}>
          <RecipeListItem
            title={recipe.fields.title}
            imageUrl={recipe.fields.photo.fields.file.url} />
        </li>
      )
      }</ul>
    </div>
  );
}

export default App;
