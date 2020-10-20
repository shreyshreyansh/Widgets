import React from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end framework' 
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite Js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by using components'
    }
];



export default () => {
    // return <Accordion items = {items} />;
    return <Search />

}