import React, {Component} from 'react'
import { quiz } from '../QuizComponent/quiz';

export default class Question extends Component {
    render() {
        return (
            <div>
                <Question quiz={quiz}/>
            </div>
        );
    }
}