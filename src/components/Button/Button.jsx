import React from "react";


class Button extends React.Component {
    render() {
        const {activeStep, onChangeStep} = this.props;
        return (
            <React.Fragment>
                {activeStep !== 5 && (
                    <div className="d-flex justify-content-center">
                        <button
                            type="button"
                            disabled={activeStep === 1}
                            className="mr-2 ml-2 btn btn-light"
                            onClick={activeStep !== 1 ? onChangeStep("Previous") : undefined}
                        >
                            Poprzedni
                        </button>
                        <button
                            type="button"
                            className="mr-2 ml-2 btn btn-light"
                            onClick={activeStep !== 5 ? onChangeStep("Next") : undefined}

                        >
                            Kolejny
                        </button>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default Button;