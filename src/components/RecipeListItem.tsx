interface RecipeListItemProps {
    title: string;
    imageUrl: string;
}

export const RecipeListItem = ({ title, imageUrl }: RecipeListItemProps) => (
    <>
        <span>{title}</span>
        <img src={`${imageUrl}?h=400`} alt={title} />
    </>
);