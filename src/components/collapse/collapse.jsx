import { useState } from 'react';
import './collapse.scss';

function Collapse({ children, title }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='collapse'>
            <h2 onClick={handleClick}>
                {title}
                <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}/>
            </h2>
            <div className={['collapse-content', isOpen && '--open'].filter(Boolean).join(' ')}>
                {children}
            </div>
        </div>
    )
}

export default Collapse;