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
]

const showAccordion = () => {
    if(window.location.pathname === '/')
        return <Accordion items = {items} />
    else
        return null;
}

const showList = () => {
    if(window.location.pathname === '/list')
        return <Search />
    else
        return null;
}

const showDropDown = () => {
    
    if(window.location.pathname === '/dropdown')
        return <Dropdown 
            // selected={selected}
            // onSelectChange={setSeleted}
            // options={options}
            />
    else
        return null;
}

const showTranslate = () => {
    if(window.location.pathname === '/translate')
        return <Translate />
    else
        return null;
}

export default () => {
    const [selected, setSeleted] = useState(options[0]);
    // return <Accordion items = {items} />;
    // return <Search />

    // const [selected, setSeleted] = useState(options[0]);
    // return <Dropdown 
    //         selected={selected}
    //         onSelectChange={setSeleted}
    //         options={options}
    //         />

    // return <Translate />;

    return ( 
        <div>
        {showAccordion()}
        {showList()}
        {showDropDown()}
        {showTranslate()}
        </div> );
}