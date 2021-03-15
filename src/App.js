import React, { useState } from 'react'; 
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [personsState,setStatePerson] = useState({
            persons :
            [
                {name: "Jacquouille La Fripouille", age : "pffff"},
                {name :"Godefroy de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et Thibaude de  Montfaucon", age : "1000"},
                {name: "Jacquard", age : "35"}
            ]
    }
                                                  );
    //second useState pour ajouter les données non modifiées par la fct setStatePerson qui ecrase tout le contenu de l'objet state
    const [CompletePersonState, setCompletePersonState] = useState({...personsState, otherStateparameter : 'some value'});

    console.log(personsState,CompletePersonState);
    
    const switchNameHandler = (newName) => {
        //console.log("was clicked");
        //ne pas faire ca this.state.persons[1].name="Godefroy";
        setStatePerson ({
                persons:
                [
                    {name: newName, age : "pffff"},
                    {name :"Godefroy COMTE de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et de Thibaude de  Montfaucon", age : "1000"},
                    {name: "Jacquard", age : "38"}
                ]}
                       )};
    
    return (
        <div className="App">
          <h1>Hi i'm a React App</h1>
          <button onClick={switchNameHandler.bind(this, 'Jacquouillet')}>Switch Name</button>

          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>je ne sais pas quand je suis né</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>ne me nomme plus Messire mais Cousin Hubert</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} click={switchNameHandler.bind(this,'Jacques - Henri')}>Qu'est ce que c'est que ce bin's !???</Person>
        </div>
    );

     // return React.createElement('div',{className: 'App'},React.createElement('T1',null,'Is it working caca fucker?'));
}

export default app;


