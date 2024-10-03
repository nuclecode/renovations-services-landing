import React, { useState } from 'react';
import './HeroButton.scss';
import ModalForm from '../ModalForm/ModalForm'; 

const HeroButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hero__cta-container">
            <button className="hero__cta" onClick={toggleModal}>
                Get a Free Quote
            </button>

            {isOpen && <ModalForm toggleModal={toggleModal} />}
        </div>
    );
};

export default HeroButton;






// import React from 'react';
// import './HeroButton.scss';

// const HeroButton = () => {
//     return (
//         <button className="hero__cta">
//             Get a Free Quote
//         </button>
//     );
// };

// export default HeroButton;
