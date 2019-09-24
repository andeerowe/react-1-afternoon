import React, {Component} from 'react'

class Sum extends Component {

constructor (){
    super ()

    this.state = {
        number1: 0,
        number2: 0,
        sum: null
    }
}

    updateNum1(val){
        this.setState({number1: parseInt(val)})
    }

    updateNum2(val){
        this.setState({number2: parseInt(val)})
    }

    solveProblem(num1,num2){
        let total = parseInt(num1 + num2)
        this.setState({sum: total})
    }

    render (){
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={(e)=> this.updateNum1(e.target.value)} />
                <input className="inputLine" onChange={(e) => this.updateNum2(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solveProblem(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum:{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum