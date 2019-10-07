import React from 'react';
import {addPoll} from '../../actions/index';

import './add-poll-modal.css';
import { connect } from 'react-redux';

class AddPollModal extends React.Component {
    state = {
        question: "",
        category: "movies",
        options: [],
        questionInputVal: "",
        optionInputVal: ""
    };


    // Adds an option to the poll.
    addOption(e) {
        e.preventDefault();

        // 1. Create an option object containing a unique key and the value
        // of the option.
        // Although Date.now() does not guarantee a unique key and generally
        // should not be used for this purpose, the keys will be unique in this case
        // as they will only be created on user input (which is slow enough to guarantee uniqueness).
        let option = {
            id: Date.now(),
            value: this.state.optionInputVal
        };

        // 2. Add the new option to the options array and clear the options input.
        this.setState(
            {
                options: [...this.state.options, option], 
                optionInputVal: ""
            }
        );
    }

    // Deletes an option from the poll.
    deleteOption(id) {
        // 1. Create a copy of the options array without the target option.
        const updatedOptions = this.state.options.filter((option) => {
            return option.id !== id;
        });

        // 2. Set the new options array as the value of state's options property.
        this.setState({options: updatedOptions});
    }

    // Update the value of the poll's category.
    onCategoryInputChange(e) {
        const selectValue = e.target.value;

        this.setState({category: selectValue});
    }

    // Update the value of the poll's question.
    onQuestionInputChange(e) {
        const inputValue = e.target.value;

        this.setState({questionInputVal: inputValue});
    }

    // Update the value of the option input.
    onInputChange(e) {
        const inputValue = e.target.value;

        this.setState({optionInputVal: inputValue});
    }

    // Submit the new poll.
    onSubmit(e) {
        // 1. Prevent default form submit behavior.
        e.preventDefault();

        // 2. Copy the options array, but without the 'unique' keys.
        const options = this.state.options.map((option) => {
            return {
                description: option.value
            };
        });

        // 3. Create an object representing the new poll, ready to be
        // sent to the server.
        const poll = {
            category: this.state.category,
            question: this.state.questionInputVal,
            options: options
        };

        // 4. Send the poll to the server.
        this.props.addPoll(poll);
    }

    // Display the options that have been added to the poll.
    renderOptions() {
        const options = this.state.options.map((option) => {
            return (
                <div className="voting-option" key={option.id}>
                    <p>{option.value}</p>
                    <button className="delete-option-button" onClick={() => {this.deleteOption(option.id);}}></button>
                </div>
            );
        });
        return options;
    }

    // Render the add poll modal & form.
    render() {
        return (
            <div className="add-poll-modal">
                <h2>Add Poll</h2>
                <form className="add-poll-form" onSubmit={(e) => {this.onSubmit(e)}}>
                    <fieldset>
                        <label htmlFor="question_input">Question:</label>
                        <input id="question-input" className="question-input" type="text" name="question" placeholder="Please enter a question/title for your poll." value={this.state.questionInputVal} onChange={(e) => {this.onQuestionInputChange(e);}}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="category-input">Category:</label>
                        <select id="category-input" className="category-input" onChange={(e) => {this.onCategoryInputChange(e);}}>
                            <option value="movies">Movies</option>
                            <option value="television">Television</option>
                            <option value="music">Music</option>
                            <option value="gaming">Gaming</option>
                            <option value="sports">Sports</option>
                            <option value="culture">Culture</option>
                            <option value="politics">Politics</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="option-input">Voting options:</label>
                        {this.renderOptions()}
                        <input className="option-input" type="text" name="option" placeholder="Please enter at least two options for your poll." value={this.state.optionInputVal} onChange={(e) => {this.onInputChange(e);}}/>
                        <button className="add-option-button" onClick={(e) => {this.addOption(e)}}>Add option</button>
                    </fieldset>
                    <input className="submit-poll" type="submit" value="Submit poll" />
                </form>
            </div>
        );
    }
}

export default connect(null, {addPoll: addPoll})(AddPollModal);