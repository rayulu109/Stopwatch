// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSeconds: 0,
  }

  componentWillUnmount = () => {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({
      isTimerRunning: false,
      timerElapsedInSeconds: 0,
    })
  }

  onStopTimer = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  OnStartTimer = () => {
    this.intervalId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSecondsAndMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)
    const minutes = Math.floor(timerElapsedInSeconds / 60)
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-label-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-image"
                alt="stopwatch"
              />
              <h1 className="timer-label">Timer</h1>
            </div>
            <h1 className="stopwatch-timer">
              {this.renderSecondsAndMinutes()}
            </h1>
            <div className="start-stop-reset-buttons-container">
              <button
                className="button start"
                type="button"
                onClick={this.OnStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="button stop"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="button reset"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
