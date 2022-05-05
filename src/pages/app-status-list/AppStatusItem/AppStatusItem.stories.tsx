import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppStatusItem from './AppStatusItem';

export default {
    title: 'App/AppStatusItem',
    component: AppStatusItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof AppStatusItem>;

const Template: ComponentStory<typeof AppStatusItem> = (args) => <AppStatusItem {...args} />;

export const connected = Template.bind({});
connected.args =
{
    "appName": "bifrost",
    "name": "Bifrost",
    "icon": "https://sub.id/images/bifrost.svg",
    "connected": true

};

export const disconnected = Template.bind({});
disconnected.args = {
    "appName": "bifrost",
    "name": "Bifrost",
    "icon": "https://sub.id/images/bifrost.svg",
    "connected": false

};
