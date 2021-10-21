import { useEffect, useState } from 'react';
import { RecipeListItem } from './RecipeListItem';
import { getRecipes } from '../Api';
import { RecipeSummary } from '../Types';

function Cookbook() {
    const [recipes, setRecipes] = useState<RecipeSummary[]>([]);

    useEffect(() => {
        getRecipes()
            .then((recipes) => setRecipes(recipes))
            .catch(console.error)
    }, [])
    return (
        <>
            <h1>Recipes</h1>
            <ul>{recipes.map(recipe =>
                <li key={recipe.id}>
                    <RecipeListItem
                        recipeId={recipe.id}
                        title={recipe.title}
                        imageUrl={recipe.imageUrl} />
                </li>
            )
            }</ul>
        </>
    );
}

export default Cookbook;