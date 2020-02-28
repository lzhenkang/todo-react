import React from 'react';
import { hot } from 'react-hot-loader';

// import Form from './components/form/form';

class Mapper extends React.Component {
  render() {
        // console.log("hi");
        console.log(this.props.mapper);
        let mapped = this.props.mapper.map(entry =>{
            return <div>{entry}</div>
        })
    return(
      <div>
        {mapped}
      </div>
    );
  }
}

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        word : "",
        toDo: []
      }
    }

    changeHandler(event){
        this.setState({word:event.target.value});
        console.log("change", event.target.value);
    }

    clickHandler(){
        console.log("clicking");
        this.state.toDo.push(this.state.word)
        // console.log(this.state.toDo)
        this.setState({toDo:this.state.toDo});
    }

    render() {
        console.log("rendering");
        return (
          <div className="item">
            <div>{this.state.word}</div>
            <div><input onChange={(event) =>{this.changeHandler(event);}} value={this.state.word}/></div>
            <button onClick={() => {this.clickHandler()}}>Submit</button>
            <div><Mapper mapper = {this.state.toDo}/></div>
          </div>
        );
    }
}


export default hot(module)(App);