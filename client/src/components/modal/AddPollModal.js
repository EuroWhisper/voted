import React from 'react';
import {addPoll} from '../../actions/index';

import './add-poll-modal.css';
import { connect } from 'react-redux';
class AddPollModal extends React.Component {
    state = {
        question: "",
        category: "",
        options: [],
        questionInputVal: "",
        optionInputVal: ""
    };


    // Adds an option to the poll.
    addOption(e) {
        e.preventDefault();

        let option = {
            id: Date.now(),
            value: this.state.optionInputVal
        };

        this.setState(
            {
                options: [...this.state.options, option], 
                optionInputVal: ""
            }
        );
    }

    deleteOption(id) {
        const updatedOptions = this.state.options.filter((option) => {
            return option.id !== id;
        });

        this.setState({options: updatedOptions});


    }

    onCategoryInputChange(e) {
        const selectValue = e.target.value;

        this.setState({category: selectValue});
    }

    
    onQuestionInputChange(e) {
        const inputValue = e.target.value;

        this.setState({questionInputVal: inputValue});
    }

    // On option input change
    onInputChange(e) {
        const inputValue = e.target.value;

        this.setState({optionInputVal: inputValue});
    }

    onSubmit(e) {
        e.preventDefault();
        const options = this.state.options.map((option) => {
            return {
                description: option.value
            };
        });

        const poll = {
            category: this.state.category,
            question: this.state.questionInputVal,
            options: options
        };
        console.log(poll);

        this.props.addPoll(poll);
    }

    renderOptions() {
        const options = this.state.options.map((option) => {
            return (
                <div className="poll-option" key={option.id}>
                    <p>{option.value}</p>
                    <button onClick={() => {this.deleteOption(option.id);}}>Delete</button>
                </div>
            );
        });
        return options;
    }

    render() {
        return (
            <div>
            <h2>Add Poll</h2>
            <form className="add-poll-form" onSubmit={(e) => {this.onSubmit(e)}}>
                <input class="question-input" type="text" name="question" placeholder="Please enter a question/title for your poll." value={this.state.questionInputVal} onChange={(e) => {this.onQuestionInputChange(e);}}/>
                <select class="category-input" onChange={(e) => {this.onCategoryInputChange(e);}}>
                    <option value="movies">Movies</option>
                    <option value="television">Television</option>
                    <option value="music">Music</option>
                    <option value="gaming">Gaming</option>
                    <option value="sport">Sport</option>
                    <option value="culture">Culture</option>
                    <option value="politics">Politics</option>
                </select>
                {this.renderOptions()}
                <input class="option-input" type="text" name="option" placeholder="Please enter at least two options for your poll." value={this.state.optionInputVal} onChange={(e) => {this.onInputChange(e);}}/>
                <button onClick={(e) => {this.addOption(e)}}>Add option</button>
                <input type="submit" value="Submit poll" />
            </form>
            </div>
        );
    }
}

export default connect(null, {addPoll: addPoll})(AddPollModal);