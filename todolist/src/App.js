import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userHasClicked: 0,
      list: [],
      inputValue: '',
    }
  }



handleInputChange=(event)=>{
  this.setState({inputValue: event.target.value})
};

handleButtonClick = () => {
  this.setState({userHasClicked: this.state.userHasClicked +1})
};

handleClear = () => {
  this.setState({inputValue: ''})
};

handleSubmit=()=>{
    const newList = this.state.list;
    newList.push(this.state.inputValue);
    this.setState({list: newList, inputValue: ''});
};

renderList=()=>{
  return this.state.list.map((listItem) => {
    return <p>{listItem}</p>
  })
}

//user has to add items to the list using input text 
// show user the updated list

  render() {
    return (
      <div className="App">
        <button onClick={this.handleButtonClick}>Click Me</button>
        <p> {this.state.userHasClicked} </p>
        <input value={this.state.inputValue} onChange={this.handleInputChange} type="text"/>
        <button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
