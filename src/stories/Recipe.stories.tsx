import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Recipe from '../components/Recipe';

export default {
    title: 'Example/Recipe',
    component: Recipe,
} as ComponentMeta<typeof Recipe>;

const Template: ComponentStory<typeof Recipe> = (args) =>
    <MemoryRouter>
        <Recipe {...args} />
    </MemoryRouter>

export const RecipeDetails = Template.bind({});
RecipeDetails.args = {
    match: {
        isExact: true,
        path: '',
        url: '',
        params: {
            recipeId: '437eO3ORCME46i02SeCW46'
        }
    },
};

export const ErrorLoadingRecipe = Template.bind({});
ErrorLoadingRecipe.args = {
    match: {
        isExact: true,
        path: '',
        url: '',
        params: {
            recipeId: '123'
        }
    },
};

