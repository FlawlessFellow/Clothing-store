import React, { FC } from 'react';
import './style.css';

type Props = {
    descWrapperClassName?: string;
    spanClassName?: string;
    pClassName?: string;
    text?: string;
    pText?: string;
};

const MainDescription: FC<Props> = ({ descWrapperClassName, spanClassName, text, pText }) => {
    return (
        <h2 className={descWrapperClassName}>
            <span className={spanClassName}>{text}</span>
            {pText && <p>{pText}</p>}
        </h2>
    );
};

export default MainDescription;
