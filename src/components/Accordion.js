import React from 'react'

function Accordion({ items }) {

    const onTitleClick = (index) => {
        console.log('title clicked', index);
    }

    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                className="title active"
                onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">{renderedItems}</div>
}

export default Accordion
