// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = () => {

    return <div>hi there! </div>;
};

// function getButtonText() {
//     return "click on me";
// }

const Sic = () => {
    const buttonText = {
        text: 'click me!!'
    }
    const style = { backgroundColor: 'blue', color: 'white' }

    const jsFor = 1 + 1;

    return (
        <div>

            <label className="label" htmlFor="name"> enter name: </label>
            <input id="name" type="text" />
            <button style={style}
            >{buttonText.text} {jsFor}</button>



        </div >
    );
};



//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

ReactDOM.render(
    <Sic />,
    document.querySelector('#testroot')
);

