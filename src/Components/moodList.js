import React from 'react';


class MoodList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'happy'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your mood is: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
        <>
        <div id= "test">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your current mood now:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="nervous">Nervous</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        <div id= "test">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select your productivity level:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    );
    }
    
};

export default MoodList;