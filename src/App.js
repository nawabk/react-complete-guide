import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';
class App extends Component {
 
   state={
    persons:[
      {id:'age3', name:"Max" , age:28},
      {id:'agee2', name:"Manu",age:29},
      {id:'agjke2', name:"Stephanie",age:26}
    ]
   }
  nameChangeHandler = (event,id)=>{
      const personIndex = this.state.persons.findIndex((p)=>{
        return p.id===id;
      });
      const person ={...this.state.persons[personIndex]};
      person.name=event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex]=person;
      this.setState({
        persons:persons
      })
  }
  togglePersonsHandler= ()=>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson:!doesShow
    });
 }
  deletePersonHandler = (personIndex)=>{
    // const persons= this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
    })
  }
    render(){
      const style={
        backgroundColor:'green',
        color:'white',
        border:'1px solid blue',
        font:'inherit',
        padding:'8px',
        cursor:'pointer'
      }
      let persons=null;
      if(this.state.showPerson){
        persons=(<div>
          {this.state.persons.map((person,index) =>{
            return <Person name={person.name}
                          age={person.age} click={()=>this.deletePersonHandler(index)}
                          key={person.id} changed={(event)=>this.nameChangeHandler(event,person.id)}/>
          })}
        </div> 
        );
        style.backgroundColor='red'
      }
      
      let classes =[]; //red bold
      if(this.state.persons.length<=2){
        classes.push('red');
      }
      if(this.state.persons.length<=1){
        classes.push('bold');
      }
    return (
      <div className="App">
         <h1>Hi,i am react App</h1>
         <p className={classes.join(' ')}>This is really working</p>
         <button 
         style={style}
         onClick={this.togglePersonsHandler}>Toggle Person</button>
         {persons}
      </div>
    );
   // retrun React.createElement('div',{className:'App'},React.createElement('h1',null,'i\'m react app'));
    }
}

export default App;



