import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getRecipe } from "../Api";
import { RecipeDetails } from "../Types";

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
        <>
            <span key='title'>{recipe.title}</span>
            <img src={`${recipe.imageUrl}?h=400`}
                alt={recipe.title} />
            {recipe.tags?.map(
                (tag) => (
                    <span key='tag'>
                        {tag}
                    </span>
                ))
            }
            <span key='description'>
                {recipe.description}
            </span>
            <span key='chef'>
                {recipe.chef}
            </span>
        </>
    )

}

export default Recipe;