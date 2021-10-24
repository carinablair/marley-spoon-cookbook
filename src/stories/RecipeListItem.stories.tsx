import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecipeListItem } from '../components/RecipeListItem';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Example/RecipeListItem',
    component: RecipeListItem,
} as ComponentMeta<typeof RecipeListItem>;

const Template: ComponentStory<typeof RecipeListItem> = (args) =>
    <MemoryRouter>
        <RecipeListItem {...args} />
    </MemoryRouter>

export const RecipeTile = Template.bind({});
RecipeTile.args = {
    title: 'White Cheddar Grilled Cheese with Cherry Preserves & Basil',
    imageUrl: '//images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg'
};

export const BrokenImageRecipe = Template.bind({});
BrokenImageRecipe.args = {
    title: 'Broken Image',
    imageUrl: '//images.ctfassets.net/kk2bw5ojx476/61XHcqOB.jpg'
};