import React from 'react';

type Props = {
    Icon?: React.ElementType;
    placeholder?: string;
    className?: string
};

const Input: React.FC<Props> = ({ Icon, placeholder, className }) => {
    return (
        <div className="relative">
            {Icon && <Icon className='absolute left-3 top-4' />}

            <input
                type="text"
                placeholder={placeholder}
                className={className + ' bg-secondary p-4 w-full rounded-lg placeholder-font-medium placeholder-text-white/60' +
                    (Icon ? " px-12" : "")}
            />
        </div>
    );
};

export default Input;
