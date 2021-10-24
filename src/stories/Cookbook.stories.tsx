import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Cookbook from '../components/Cookbook';

export default {
    title: 'Example/Cookbook',
    component: Cookbook,
} as ComponentMeta<typeof Cookbook>;

const Template: ComponentStory<typeof Cookbook> = (args) =>
    <MemoryRouter>
        <Cookbook />
    </MemoryRouter>


export const Recipes = Template.bind({});
Recipes.args = {};
