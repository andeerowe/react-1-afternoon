import React, {Component} from 'react'

class Palindrome extends Component {

    constructor(){
        super ()

        this.state = {
            userInput: '',
            palindrome: ''

        }
    }

    handleChange (val) {
        this.setState ({userInput: val})
    }

    solveProblem(uip){
        let forwards = uip
        let backwards = uip

        backwards = backwards.split('')
        backwards = backwards.reverse()
        backwards = backwards.join('')

        if (forwards === backwards){
            this.setState({ palindrome: 'true'})
            
        } else {
            this.setState({ palindrome: 'false'})
        }

        
    }
        
    render (){
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solveProblem(this.state.userInput)}>Solve</button>
                <span className="resultsBox">Results: {this.state.palindrome}
                
                </span>
            </div>
        )
    }
}

export default Palindrome