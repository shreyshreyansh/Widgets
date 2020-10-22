import React, { useState } from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
];

const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null;
}

export default () => {
    const [selected, setSeleted] = useState(options[0]);
    return ( 
        <div>
        {showComponent("/", <Accordion items = {items} />)}
        {showComponent("/list", <Search />)}
        {showComponent("/dropdown", <Dropdown 
            selected={selected}
            onSelectChange={setSeleted}
            options={options}
            />)}
        {showComponent("/translate", <Translate />)}
        </div> );
}