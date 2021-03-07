import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [
            {name: "Jacquouille La Fripouille", age : "pffff"},
            {name :"Godefroy de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et Thibaude de  Montfaucon", age : "1000"},
            {name: "Jacquard", age : "35"}
        ],
        otherStateparameter : "some value"
    }

    switchNameHandler = () => {
        //console.log("was clicked");
        //ne pas faire ca this.state.persons[1].name="Godefroy";
        this.setState({
            persons:[
                {name: "Jacquouille La Fripouille", age : "pffff"},
                {name :"Godefroy Comte de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et de Thibaude de  Montfaucon", age : "1000"},
                {name: "Jacquard", age : "38"}
            ]
        }
                     )
    }

  render() {
      return (
      <div className="App">
        <h1>Hi i'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>je ne sais pas quand je suis né</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>ne me nomme plus Messire mais Cousin Hubert</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Qu'est ce que c'est que ce bin's !???</Person>
      </div>
    );

     // return React.createElement('div',{className: 'App'},React.createElement('T1',null,'Is it working caca fucker?'));
  }
}

export default App;
 
