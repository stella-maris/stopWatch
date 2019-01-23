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
        this.setState({
            isOn: true,
            time: (this.state.time) / 1000,
            start: Math.round((Date.now()/1000) - this.state.time)
        });
        this.timer = setInterval(() => {
            this.setState({
                time: Math.round((Date.now()/1000) - this.state.start)
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
        this.stopTimer();
        this.setState({
            start: 0,
            time: 0,
            isOn: false
        });

        console.log("reset");
    }

    componentDidMount() {
        this.startTimer()
    }
    render () {
        return (
            <div>
                <p>{this.state.time}</p>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>

        );
    }
}

export default StopWatch;