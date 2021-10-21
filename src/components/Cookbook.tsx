import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { RecipeListItem } from './RecipeListItem';

function Cookbook() {
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
            .then((response) => setRecipes(response.items))
            .catch(console.error)
    }, [])
    return (
        <>
            <h2>Recipes</h2>
            <ul>{recipes.map(recipe =>
                <li key={recipe.sys.id}>
                    <RecipeListItem
                        recipeId={recipe.sys.id}
                        title={recipe.fields.title}
                        imageUrl={recipe.fields.photo.fields.file.url} />
                </li>
            )
            }</ul>
        </>
    );
}

export default Cookbook;