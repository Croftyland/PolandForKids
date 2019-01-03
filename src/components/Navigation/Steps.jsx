import React from "react";
import Step from "./Step";
class Steps extends React.Component {
    render() {
        const { activeStep } = this.props;
        return (
            <div className="steps mb-4 d-flex justify-content-around">
                <Step id={1} nameStep="Witamy" activeStep={activeStep} />
                <Step id={2} nameStep="Wideo" activeStep={activeStep} />
                <Step id={3} nameStep="Pytanie" activeStep={activeStep} />
                <Step id={4} nameStep="Przedstawiamy" activeStep={activeStep} />
                <Step id={5} nameStep="Mapa" activeStep={activeStep} />
            </div>
        );
    }
}
export default Steps;