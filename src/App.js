import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
      return (
      <div className="App">
        <h1>Hi i'm a React App</h1>
        <Person name="Jacquouille" age="pfffff">je ne sais pas quand je suis né</Person>
        <Person name="Godefroy de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et Thibaude de  Montfaucon" age="1000">ne me nomme plus Messire mais Cousin Hubert</Person>
        <Person name="Jacquard" age="35">Qu'est ce que c'est que ce bin's !???</Person>
      </div>
    );

     // return React.createElement('div',{className: 'App'},React.createElement('T1',null,'Is it working caca fucker?'));
  }
}

export default App;
