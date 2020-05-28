// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = () => {
    return <div>hi there! </div>;
};

// const Nop = () => {
//     return <div> testing root successful</div>;
// };

const Sic = () => {
    return (
        <div>

            <label class="label" for="name"> enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>submit</button>

        </div>
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

