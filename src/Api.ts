import { createClient } from 'contentful';
import { RecipeDetails, RecipeSummary } from './Types';

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID!,
    environment: process.env.REACT_APP_ENVIRONMENT_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN!
})

export const getRecipes = async () : Promise<RecipeSummary[]> => {
    let recipes = await client.getEntries({
        content_type: 'recipe'
    });

    return recipes.items.map((recipe:any) => (
        {
            id: recipe.sys.id,
            title: recipe.fields.title,
            imageUrl: recipe.fields.photo.fields.file.url
        }
        ));
}

export const getRecipe = async (recipeId: string) : Promise<RecipeDetails> => {
 let recipe: any = await client.getEntry(recipeId);
 return {
     title: recipe.fields.title,
     imageUrl: recipe.fields.photo.fields.file.url,
     tags: recipe.fields.tags?.map((tag:any) => (
         tag.fields.name
         )),
     description: recipe.fields.description,
     chef: recipe.fields.chef?.fields?.name
 }

}

