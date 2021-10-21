import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

interface RecipeProps {
    recipeId: string;
}

function Recipe(props: RouteComponentProps<RecipeProps>) {
    let recipeId = props.match.params.recipeId;

    const [recipe, setRecipe] = useState<any>(undefined);

    useEffect(() => {
        const client = createClient({
            space: process.env.REACT_APP_SPACE_ID!,
            environment: process.env.REACT_APP_ENVIRONMENT_ID,
            accessToken: process.env.REACT_APP_ACCESS_TOKEN!
        })

        client.getEntry(recipeId)
            .then((response) => setRecipe(response))
            .catch(console.error)
    }, [])

    if (recipe === undefined) {
        return <span>Loading...</span>
    }
    return (
        <>
            <span key='title'>{recipe.fields.title}</span>
            <img src={`${recipe.fields.photo.fields.file.url}?h=400`}
                alt={recipe.fields.title} />
            {recipe.fields.tags?.map(
                (tag: any) => (
                    <span key='tag'>
                        {tag.fields?.name}
                    </span>
                ))
            }
            <span key='description'>
                {recipe.fields.description}
            </span>
            <span key='chef'>
                {recipe.fields?.chef?.fields?.name}
            </span>
        </>
    )

}

export default Recipe;