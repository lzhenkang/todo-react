import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        word : "",
        toDo: []
      }
    }

    // mapList(){
    //     console.log("Mapping List")
    //     let mapped = this.state.toDo.map((entry, index) =>{
    //         return (<div><div>{index + 1}. {entry}</div>
    //         <button onClick={() => {this.deleteEntry()}}>delete</button></div>)
    //     })
    //     console.log("below is mapped")
    //     console.log(mapped)
    // }

    deleteEntry(index){
        console.log("clicking delete");
        // this.state.toDo.push(this.state.word)
        this.state.toDo.splice(index, 1)
        // console.log(this.state.toDo)
        this.setState({toDo:this.state.toDo});
    }

    changeHandler(event){
        this.setState({word:event.target.value});
        console.log("change", event.target.value);
    }

    clickHandler(){
        console.log("clicking");
        this.state.toDo.push(this.state.word)
        // this.mapList()
        // console.log(this.state.toDo)
        this.setState({toDo:this.state.toDo});
    }

    render() {
        console.log("rendering");

        let mapped = this.state.toDo.map((entry, index) =>{
            return (<div><div>{index + 1}. {entry}</div>
            <button onClick={() => {this.deleteEntry(index)}}>delete</button></div>)
        })

        return (
          <div className="item">
            <div><input onChange={(event) =>{this.changeHandler(event);}} value={this.state.word}/></div>
            <button onClick={() => {this.clickHandler()}}>Submit</button>
{/*            <div><Mapper mapper = {this.state.toDo}/></div>*/}
            <div>{mapped}</div>
          </div>
        );
    }
}


export default hot(module)(App);