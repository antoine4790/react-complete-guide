import React, { Component } from 'react'; 
//import css géré par Webpack
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [
            {name: "Jacquouille La Fripouille", age : "pffff"},
            {name :"Godefroy Comte de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et Thibaude de  Montfaucon", age : "1000"},
            {name: "Jacquard", age : "35"}
        ],
        otherStateparameter : "some value",
        isdisplayed: false
    }

    

    switchNameHandler = (newName) => {
        //console.log("was clicked");
        //ne pas faire ca this.state.persons[1].name="Godefroy";
        this.setState({
            persons:[
                {name: newName, age : "pffff"},
                {name :"Godefroy Comte de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et de Thibaude de  Montfaucon", age : "1000"},
                {name: "Jacquard", age : "38"}
            ]
        }
                     )
    }
    //Ici, on change la valeur du nom à la volee grace a un event onChange placé sur une balise input dans le composant Person
    //il faut aussi placer une proprieté coté composant pere dans la balise Person concernée, celle que l'on souhaite modifier
    //il faut placer une variable event.target.value qui va contenir la valeur capturée dans l'input grace à l'event onChange
    
    changeNameHandler = (event) => {
        //console.log("was clicked");
        //ne pas faire ca this.state.persons[1].name="Godefroy";
        this.setState({
            persons:[
                {name: event.target.value, age : "pffff"},
                {name :"Godefroy Comte de Montmirail d'Apremont et Papincourt fils d'Aldebert de Malfete et de Thibaude de  Montfaucon", age : "1000"},
                {name: "Jacquard", age : "38"}
            ]
        }
                     )
    }

    //function qui affiche ou masque les composants person
    togglePersonsHandler = () => {
        const switchButton = this.state.isdisplayed;
        this.setState({
            isdisplayed : !switchButton
        })
    }
    
    render() {

        const button1InjectedCssInlineStyle =
            {
                border : '1px solid blue',//bordure du bouton
                padding : '8px',
                backgroundColor : 'white',
                font : 'inherit',
                cursor : 'pointer'
                
            };

        const button2InjectedCssInlineStyle =
            {
                border : '1px solid red',//bordure du bouton
                padding : '8px',
                backgroundColor : 'white',
                font : 'inherit',
                cursor : 'pointer'
                
            };

        let persons = null;

        //affichage conditionnel
        //the javascript way of using conditional display of components
        if (this.state.isdisplayed)
        {
            persons = (
                <div>
                  <Person name={this.state.persons[0].name}
                          age={this.state.persons[0].age}
                          click={this.switchNameHandler.bind(this,'Jacquouillet')}
                          changed={this.changeNameHandler}>je ne sais pas quand je suis né</Person>
                  <Person name={this.state.persons[1].name}
                          age={this.state.persons[1].age} >ne me nomme plus Messire mais Cousin Hubert</Person>
                  <Person name={this.state.persons[2].name}
                          age={this.state.persons[2].age} >Qu'est ce que c'est que ce bin's !???</Person>
                </div>
            )
        }
        
        return (
            <div className="App">
              <h1>Hi i'm a React App</h1>
              <button
            //Inline Css
                style={button1InjectedCssInlineStyle}
                onClick={this.switchNameHandler.bind(this,"Jacquouille!")}>Switch Name</button>
              
              <button style={button2InjectedCssInlineStyle}
                      onClick={this.togglePersonsHandler}>Toggle Persons</button>
              
              {persons}
              
            </div>
        );

        // return React.createElement('div',{className: 'App'},React.createElement('T1',null,'Is it working caca fucker?'));
    }
}

export default App;
 
