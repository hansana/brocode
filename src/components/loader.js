import React from 'react';

function Loader(props) {

    const { isLoading } = props;

    if (isLoading) {
        return (
            <div className="loader">
                <div className="spinner"></div>
            </div>
        );
    } else {
        return (
            <div>
            </div>
        );
    }
}

export default Loader;
