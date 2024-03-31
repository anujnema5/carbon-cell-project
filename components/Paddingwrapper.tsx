import React from 'react';

const Paddingwrapper = (Component: React.FC<any>, className?: string) => {
    const NewComponent: React.FC<any> = (props) => {
        return (
            <div>
                <Component {...props} />
            </div>
        );
    };

    return NewComponent;
};

export default Paddingwrapper;
