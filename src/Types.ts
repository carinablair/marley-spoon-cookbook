export interface RecipeSummary {
    id: string;
    title: string;
    imageUrl: string;
}

export interface RecipeDetails {
    title: string;
    imageUrl: string;
    tags: string[];
    description: string;
    chef: string;
}