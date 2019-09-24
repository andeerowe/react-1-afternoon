import React, {Component} from 'react'

class FilterString extends Component {
    constructor (){
        super ()

        this.state = {
            unfilteredArray: ['red', 'blue', 'pink', 'white', 'yellow'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    solveProblem(uip){
        let colors = this.state.unfilteredArray
        let filteredColors = []
        for(let i = 0; i < colors.length; i++){
            if (colors[i].includes(uip)){
                filteredColors.push(colors[i])
            }
        } this.setState({filteredArray: filteredColors})
    }

    render (){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)} />
                <button className="confirmationButton" onClick={() => this.solveProblem(this.state.userInput)}> Filter</button>
                <span className="resultsBox filterStringRB">Filtered:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
export default FilterString