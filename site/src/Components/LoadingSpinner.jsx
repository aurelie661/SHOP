import React from 'react'

const LoadingSpinner = (props) => {
    let {size = "2rem", color="#123456", bsColor = ""} = props;

    return (
        <div className="spinner">
            &nbsp;
            <div className={"spinner-border " + bsColor} 
                 style={{height: size, width: size, color}}
                 role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingSpinner;