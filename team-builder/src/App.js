import react from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [formdata, setFormdata] = useState({name:"", email:"" , role:""})
  const onInputChange = evt => {
    setFormdata({
      ...formdata,[evt.target.name]:evt.target.value
    })
  };

  const onSubmitFc = evt => {
    evt.preventDefault();
  }
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Forms - Team Builder
        </p>

      <form onSubmit ={onSubmitFc}>
        <label forHtml = 'username'>User name and surname </label>
        <input id = 'username' 
          name = 'name'  
          type = 'text' 
          // placeholder=' Name and Surname'
          value = {formdata.name}
          onChange={onInputChange} />
        <br></br>
        <br></br>

        <label forHtml = 'enteremail'> Email address </label>
        <input id = 'enteremail' 
              name = 'email' 
              type = 'email' 
              value = {formdata.email}
              onChange={onInputChange} />
        <br></br>
        <br></br>

        <select id = 'career' name = 'role' onChange={onInputChange} >
          <option value = '1' > UX/UI Designer </option>
          <option value = '2' > Software Engineer </option>
          <option value = '3' > Data Scientist </option>
          <option value = '4' > Full Stack Developer </option>
        </select>
        <br></br>
        <br></br>

      
        <input id = 'submitbutton'  type = 'submit'/>

      </form>
    </div>
  );
}

export default App;
