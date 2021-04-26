import React from 'react';
import { StyledButton } from './style';

type ButtonProps = {
    children: string | HTMLBaseElement
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (

        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;