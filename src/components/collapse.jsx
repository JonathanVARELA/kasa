import { useState } from 'react';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    if (isOpen) {
        return (
            <div className='collapse'>
                <h2 onClick={handleClick}>{props.title}<i className="fa-solid fa-chevron-up"></i></h2>
                {props.children}
            </div>
        )
    }

    return (
        <div className='collapse'>
            <h2 onClick={handleClick}>{props.title}<i className="fa-solid fa-chevron-down"></i></h2>
            {isOpen ? props.children : null}
        </div>
    )
}

export default Collapse;