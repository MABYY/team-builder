import react from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    { id: 1,
      name:"Emily", 
      email:"emily@lambda.com" , 
      role:"Data Scientist"}
  ]);

  const [formdata, setFormdata] = useState({name:"", email:"" , role:""});


// Add new member to the list of members
  const addNewMember = (form) => {
    setMembers([...members,{...form, id: Date.now() }])
  }

  // Fill in the form with the information provided by the new user
  const onInputChange = evt => {
    setFormdata({
      ...formdata,[evt.target.name]:evt.target.value
    })
  };

  // OnSubmitFc triggers the fc that adds new member to the list of members
  const onSubmitFc = evt => {
    evt.preventDefault();
    addNewMember(formdata)
    console.log('members',members)


  }
  return (
    <div className="App">
        <p> Forms - Team Builder</p>

      <form onSubmit ={onSubmitFc}>
        <label htmlFor = 'username'>User name and surname </label>
        <input id = 'username' 
          name = 'name'  
          type = 'text' 
          // placeholder=' Name and Surname'
          value = {formdata.name} // prepopulate with values
          onChange={onInputChange} />
        <br></br>
        <br></br>

        <label htmlFor = 'enteremail'> Email address </label>
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
