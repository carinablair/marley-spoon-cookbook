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

    const [recipe, setRecipe] = useState<RecipeDetails | 'loading' | 'error'>('loading');

    useEffect(() => {
        getRecipe(recipeId)
            .then((recipe) => setRecipe(recipe))
            .catch((error) => {
                console.error(error);
                setRecipe('error')
            })
    }, [])

    if (recipe === 'loading') {
        return <span>Loading...</span>
    }
    if (recipe === 'error') {
        return <span>Error loading recipe</span>
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
            <h2 key={`what's cooking`}>What's cooking</h2>
            <ReactMarkdown>
                {recipe.description}
            </ReactMarkdown>
            <span key='chef' className='chef'>
                Recipe by: {recipe.chef || 'Mystery chef'}
            </span>
        </div>
    )

}

export default Recipe;