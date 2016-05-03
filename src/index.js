import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBNwt9TaGWmq2gcbxpycyPK5KJHnOMVVl4';

//	Create a new component, This component should produce
//	some HTML
const App = function(){
	return <div>Hi!</div>; 
}

//	Take this component's generated HTML and put it 
//	on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));


/*

const App = function(){
	return ...
}
//	Can be rewritten as:
const App = () => {
	return ...
}
//	This is roughly the same thing as function keyword but the difference
//	lies when calling the 'this' variable


*/