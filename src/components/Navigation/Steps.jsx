import React from "react";
import Step from "./Step";
class Steps extends React.Component {
    render() {
        const { activeStep } = this.props;
        return (
            <div className="steps mb-4 d-flex justify-content-around">
                <Step id={1} nameStep="Welcome" activeStep={activeStep} />
                <Step id={2} nameStep="Video" activeStep={activeStep} />
                <Step id={3} nameStep="Question" activeStep={activeStep} />
                <Step id={4} nameStep="Registration" activeStep={activeStep} />
                <Step id={5} nameStep="Map" activeStep={activeStep} />
            </div>
        );
    }
}
export default Steps;