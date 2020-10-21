import React, { useState } from 'react';
// import Search from './components/Search';
// import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front-end framework' 
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favourite Js library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by using components'
//     }
// ];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

export default () => {
    // return <Accordion items = {items} />;
    // return <Search />

    const [selected, setSeleted] = useState(options[0]);
    return <Dropdown 
            selected={selected}
            onSelectChange={setSeleted}
            options={options}
            />

}