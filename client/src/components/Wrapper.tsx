import React from 'react';

type WrapperProps = {
    variant?: "small"| "regular"
}

const Wrapper: React.FC<WrapperProps> = ({children, variant = "regular"})=> {
    return (
        <div style={{maxWidth: variant === "regular"?  "1200px": "400px", width: "100%", margin: "0 auto"}}>
            {children}
        </div>
    );
};

export default Wrapper;