import React, {Component} from 'react'

class FilterObject extends Component {
    constructor (){
        super ()

        this.state = {
            unFilteredArray: [
                {
                    breed: 'Golden Retriever',
                    age: 2,
                    name: 'Charles',
                    goodBoy: true,
                    favorite: true

                },
                {
                    breed: 'GPS',
                    age: 3,
                    goodBoy: false
                },
                {
                    age: 7,
                    breed: 'GSP',
                    name: 'Scout',
                    goodBoy: true
                },
                {
                    breed: 'mixed',
                    goodBoy: false,
                    name: 'Finn'
                }
            ],
            userInput: '',
            filteredArray: []

        }
    }

    handleChange (val){
        this.setState({userInput:val})
    }

    solveProblem(uip){
        let dogs = this.state.unFilteredArray
        let filteredDogs = []

        for (let i = 0; i < dogs.length; i++){
            if(dogs[i].hasOwnProperty(uip)){
                filteredDogs.push(dogs[i])
            }
        }

        this.setState({filteredArray: filteredDogs})
    }

    render (){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => {this.handleChange(event.target.value)}} />
                <button className="confirmationButton" onClick={() => this.solveProblem(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject