import React from 'react';
import Carousel from '../Carousel';

export default {
    title: 'Carousel',
    parameters: {
        component: Carousel,
    },
};

export const Story1 = () => <Carousel autoChange autoChangeType="infinite" />;

Story1.storyName = 'Базовое использование';
