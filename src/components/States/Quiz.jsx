import React from 'react';
import data from '../data/data';
import Question from '../QuizComponent/Question'
import Results from '../QuizComponent/Results';
import Progress from '../QuizComponent/Progress'
import Arrow from '../QuizComponent/Arrow'

class Quiz extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            allQuestions: data.allQuestions,
            currentQuestion: data.allQuestions[0],
            progress: 0,
            allAnswers: [],
            loadNewQuestion: false,
            showResults: false,
            loadingResults: false,
            correctAnswers: null
        }

    }

    onSelectAnswer = (answer) => {
        //console.log('Answer selected '+answer);

        const {allAnswers} = this.state;

        this.setState({
            allAnswers: [...allAnswers, answer]
        }, this.goToNextQuestion())

    }

    goToNextQuestion = () => {
        //console.log('go to next question after the state is updated');

        const {progress, allQuestions} = this.state;

        this.setState({
            loadNewQuestion: true
        })

        // we have the question faded out
        setTimeout(()=> {

            if(progress < allQuestions.length-1){

                this.setState({
                    progress: progress+1,
                    currentQuestion: allQuestions[progress+1],
                    loadNewQuestion: false
                })

            } else {

                this.setState({
                    loadNewQuestion: false,
                    showResults: true
                })

            }

        }, 300)

    }

    onLoadResults = () => {
        console.log('Loading results!');

        this.setState({
            loadingResults: true
        })

        // correct answers url https://api.myjson.com/bins/zgpjb

        fetch('https://api.myjson.com/bins/zgpjb')
            .then(response => response.json())
            .then(parsedJSON => {
                //console.log(parsedJSON.correctAnswers);
                const correctAnswers = parsedJSON.correctAnswers;

                this.setState({
                    correctAnswers,
                    loadingResults: false,
                    resultsLoaded: true
                })

            })
            .catch(error => {
                //console.log('fetching failed', error);
                this.setState({
                    loadingResults: false,
                    resultsLoaded: true
                })
            })

        // // fake delay
        // setTimeout(()=> {
        //   this.setState({
        //     loadingResults: false
        //   })
        // }, 1000)

    }

    render(){
        const {currentQuestion, loadNewQuestion, showResults, allAnswers, allQuestions, loadingResults, correctAnswers, resultsLoaded, progress} = this.state;

        const navIsActive = allAnswers.length > 0;

        return (
            <div className={`${loadingResults ? 'is-loading-results' : ''} ${resultsLoaded ? 'is-showing-results' : 'no-results-loaded'}`}>

                {/* Header - start */}
                <header>
                    <img className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`} src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
                </header>
                {/* Header - end */}

                {/* Content - start */}
                <div className={`content`}>

                    <Progress total={allQuestions.length} progress={allAnswers.length} />

                    {
                        !showResults ? <Question
                            currentQuestion={currentQuestion}
                            onSelectAnswer={this.onSelectAnswer}
                            loadNewQuestion={loadNewQuestion}
                        /> : <Results
                            loadNewQuestion={loadNewQuestion}
                            allAnswers={allAnswers}
                            allQuestions={allQuestions}
                            onLoadResults={this.onLoadResults}
                            correctAnswers={correctAnswers}
                        />
                    }

                </div>
                {/* Content - end */}

                {/* Navigation - start - is-active makes it visible */}
                <div className={`navigation text-center ${navIsActive ? 'is-active' : ''}`}>
                    <Arrow
                        direction="left"
                        progress={progress}
                        allAnswers={allAnswers}
                    />
                    <Arrow
                        direction="right"
                        progress={progress}
                        allAnswers={allAnswers}
                    />
                </div>
                {/* Navigation - end */}

            </div>
        )
    }
}

export default Quiz;