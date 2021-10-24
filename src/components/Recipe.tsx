import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getRecipe } from "../Api";
import { RecipeDetails } from "../Types";
import ReactMarkdown from 'react-markdown'

interface RecipeProps {
    recipeId: string;
}

function Recipe(props: RouteComponentProps<RecipeProps>) {
    let recipeId = props.match.params.recipeId;

    const [recipe, setRecipe] = useState<RecipeDetails | undefined>(undefined);

    useEffect(() => {
        getRecipe(recipeId)
            .then((recipe) => setRecipe(recipe))
            .catch(console.error)
    }, [])

    if (recipe === undefined) {
        return <span>Loading...</span>
    }
    return (
        <div className='recipe-details'>
            <img src={`${recipe.imageUrl}?w=600`}
                alt={recipe.title} />
            <h1>{recipe.title}</h1>
            {recipe.tags?.map(
                (tag) => (
                    <span key={tag} className='tag'>
                        {tag}
                    </span>
                ))
            }
            <h2>What's cooking</h2>
            <ReactMarkdown>
                {recipe.description}
            </ReactMarkdown>
            <span key='chef'>
                {recipe.chef}
            </span>
        </div>
    )

}

export default Recipe;