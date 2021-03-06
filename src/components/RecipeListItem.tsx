import { Link } from "react-router-dom";

interface RecipeListItemProps {
    recipeId: string;
    title: string;
    imageUrl: string;
}

export const RecipeListItem = ({ recipeId, title, imageUrl }: RecipeListItemProps) => (
    <>
        <Link to={`/recipe/${recipeId}`}>
            <div className='recipe-card'>
                <img src={`${imageUrl}?h=400`} alt={title} />
                <span>{title}</span>
            </div>
        </Link>
    </>
);