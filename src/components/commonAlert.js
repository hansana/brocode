import React from 'react';

function CommonAlert() {
    const { error, isOpen } = props;
    let open = '';
    if (isOpen) { 
        open = "popup--open";
    }

    return (
        <div className={"popup " + open}>
            <div className="popup__header">
                <div title="Close" className="close layout--center">
                    X
                </div>
            </div>
            <div className="popup__body layout--center">
                <div className="popup__body-inner">
            
                    <div className="form">
                        <div className="form__title">
                            <span className="highlight">#</span>OOPS!
                        </div>
                        <div className="form__description">
                            {error}
                        </div>
                        <form name="alert">
                            <div className="alert">
                                <input type="submit" value="OK" />
                            </div>
                        </form>
                    </div>
            
                </div>
            </div>
        </div>
    );
}

export default CommonAlert;