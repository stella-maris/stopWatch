import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            time: 0,
            isOn: false
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        //this.timerClick = this.timerClick.bind(this);
    }
    startTimer() {
        //gets call on page load (componentDidMount)
        //paused click event resumes
        //Changes button to "Pause" - switch that is on or off
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time,
                start: Date.now() - this.state.start
            });

        }, 1000);
        console.log("start");
    }
    stopTimer() {
        //pauses timer
        //change button to "Start" -
        clearInterval(this.timer);
        console.log("stop");
    }
    resetTimer() {
        //Stops timer
        // Resets timer to zero
        //Changes button to "Start"
        this.setState({time: 0});
        console.log("reset");
    }

    componentDidMount() {

    }
    render () {
        return (
            <div>
                <p>{this.state.time}</p>
                <button onClick={this.timerClick}>Pause</button>
            </div>

        );
    }
}

export default StopWatch;