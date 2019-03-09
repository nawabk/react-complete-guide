import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
 
   state={
    persons:[
      {name:"Max" , age:28},
      {name:"Manu",age:29},
      {name:"Stephanie",age:26}
    ]
   }
   switchNameHandler = (newName)=>{
    console.log('was clicked');
    this.setState({
      persons:[
        {name:newName , age:28},
        {name:"Manu",age:29},
        {name:"Stephanie",age:27}
      ]
    })
  }
  nameChangeHandler = (event) =>{
    this.setState({
      persons:[
        {name:"Max" , age:28},
        {name:event.target.value,age:29},
        {name:"Stephanie",age:26}
      ]
    })
  }
    render(){
      const style={
        backgroundColor:'white',
        border:'1px solid blue',
        font:'inherit',
        padding:'8px',
        cursor:'pointer'
      }
    return (
      <div className="App">
         <h1>Hi,i am react App</h1>
         <button 
         style={style}
         onClick={()=>this.switchNameHandler("Maximillian")}>Switch Name</button>
         <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          />
         <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!')}
          changed={this.nameChangeHandler}>My Hobbies:playing cricket</Person>
         <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
   // retrun React.createElement('div',{className:'App'},React.createElement('h1',null,'i\'m react app'));
    }
}

export default App;



