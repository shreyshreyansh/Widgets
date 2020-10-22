import React from 'react'

const Link = ({href, className, children}) => {
    
    const onClickHandler = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
        <a onClick={onClickHandler} className={className} href={href}>{children}</a>
    )
}

export default Link
