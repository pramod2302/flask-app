import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/people').then(response => response.json().then(data => {
      console.log(data);
      document.getElementById('root').innerHTML
        = " <p>First Name: ".concat(data.firstname, "</p>\n            <p>Last Name: ").concat(data.lastname, "</p>\n            <p>Age: ").concat(data.age, "</p>\n            <p>Worked at:</p>\n            <ol>\n                <li>").concat(data.companies[0], "</li>\n                <li>").concat(data.companies[1], "</li>\n            </ol>");
    }));
  },[])
  return (
    <div className="App">
      <h1>The backend is not working</h1>

    </div>
  );
}

export default App;
