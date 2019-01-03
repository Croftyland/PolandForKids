import React, {Component} from 'react';
import Video from './Video/Video';
import Map from './States/Map';
import Quiz from './States/Quiz';
import Steps from './Navigation/Steps';
import Button from './Button/Button'
import Registration from './States/Registration';
import Welcome from './States/Welcome';



class MainForm extends Component {
    constructor() {
        super();
        this.state = {
            values: {
                name: '',
                years: '',
                city: ''
            },
            errors: {
                step: 1,
                name: false,
                years: false,
                city: false
            },
            activeStep: 1,
            isDisablePrevBtn: true,
            isDisableNextBtn: true
        }
    }

    onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            values: {...prevState.values, [name]: value}
        }));
        console.log(e.target.name, e.target.value, e.target.checked)
    };
    validateFields = () => {
        const errors = {};
        if (this.state.activeStep === 1) {
            if (this.state.values.name.length < 5) {
                errors.firstName = "Must be more then 4 characters";
            }
            if (this.state.values.years.length < 2) {
                errors.lastName = "Must be more then 2 characters";
            }
            if (this.state.values.city.length < 5) {
                errors.lastName = "Must be more then 4 characters";
            }

        }
        return errors;
    };
    onChangeStep = name => event => {

        event.preventDefault();
        const {activeStep} = this.state;
        if (name === "Previous" && activeStep > 1) {
            this.setState(
                {activeStep: activeStep - 1}
            );
        }
        if (name === "Next" && activeStep < 5) {
            console.log('clicked')
            this.setState({
                activeStep: activeStep + 1,
                errors: {}
            });
            // const errors = this.validateFields();
            // if (Object.keys(errors).length > 0) {
            //     this.setState(
            //         {errors}
            //     );
            // } else {}


        }
    };


    render() {
        const {activeStep, values, errors} = this.state;
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <Steps activeStep={activeStep}/>
                    {activeStep === 1 ? (
                        <Map
                            onChange={this.onChange}
                            values={values}
                            errors={errors}
                        />
                    ) : null}
                    {activeStep === 2 ? (
                        <Video
                            onChange={this.onChange}
                            values={values}
                            errors={errors}
                        />
                    ) : null}
                     {activeStep === 3 ? (
                         <Quiz
                            error={errors}
                            onChange={this.onChange}
                            img={values}
                         />
                    ) : null}
                    {activeStep === 4 ? (
                        <Registration
                            errors={errors}
                            onChange={this.onChange}
                            values={values}
                        />
                    ) : null}
                    {activeStep === 5 ? (
                        <Map
                            onChange={this.onChange}
                            errors={errors}
                        />

                    ) : null}

                    <Button
                        onChangeStep={this.onChangeStep}
                        activeStep={this.activeStep}
                    />
                </form>
            </div>
        );
    }
}

export default MainForm;