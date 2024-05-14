import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import Button from '../Button/Button';

interface SectionProps {
    children: React.ReactNode;
    pText: string;
    sectionClassName?: string;
    descWrapperClassName?: string;
    spanClassName?: string;
}

const Section: React.FC<SectionProps> = ({ children, pText, sectionClassName, descWrapperClassName, spanClassName }) => {
    return (
        <div>
            <section className={sectionClassName}>
                <MainDescription pText={pText} descWrapperClassName={descWrapperClassName} spanClassName={spanClassName} />
                {children}
                <Button />
            </section>
        </div>
    );
};

export default Section;
