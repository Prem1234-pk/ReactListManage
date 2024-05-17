import './App.css';
import { useState } from 'react';
import data from './db.json'

function App() {
  const [list, setList] = useState(data);


  const [editObj, setEditObj] = useState(null);
  const [editIndex,setEditIndex] = useState(0);
  const editFlagFunction = (index) => {
    setEditIndex(index);
    console.warn(index);
    setEditObj(JSON.parse(JSON.stringify([...list][index])));
  }
  const handleSubmit = () => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;
    var y = {
      "userName": name,
      "email": email,
      "role": role
    };
    setEditObj(y);
    list.pop(editIndex);
    setList([...list, y]);
  }


  const deleteList = (index) => {
    console.warn(index);
    list.pop(index);
    setList([...list]);
  }
  return (
    <div >
  
      <div style={{ marginLeft: '100px', padding: '50px' ,borderStyle:'solid',width:'600px'}}>
        <table>
          <thead>
            <tr>
              <th style={{borderStyle:'solid'}}>Name</th>
              <th style={{borderStyle:'solid'}}>Email</th>
              <th style={{borderStyle:'solid'}}>role</th>
              <th style={{borderStyle:'solid'}}>Edit</th>
              <th style={{borderStyle:'solid'}}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 && list.map((item, index) => {
              return (
                <tr key={{ index }}>
                  <td style={{borderStyle:'solid',borderWidth:'1px'}}>{item.userName}</td>
                  <td style={{borderStyle:'solid',borderWidth:'1px'}}>{item.email}</td>
                  <td style={{borderStyle:'solid',borderWidth:'1px'}}>{item.role}</td>
                  <td style={{borderStyle:'solid',borderWidth:'1px'}}><button onClick={() => { editFlagFunction(index) }}>Edit</button></td>
                  <td style={{borderStyle:'solid',borderWidth:'1px'}}><button onClick={() => { deleteList(index) }}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {(editObj != null) ?
          <div style={{borderStyle:'solid',margin:'10px'}}>
            {/* <h1>{{editObj}}</h1> */}
            <p>Name: <span><input type='text' placeholder={editObj.userName} id='name' /></span></p>
            <p>Email: <span><input type='text' placeholder={editObj.email} id='email' /></span></p>
            <p>Role: <span><input type='text' placeholder={editObj.role} id='role' /></span></p>
            <button onClick={() => handleSubmit()}>Submit</button>
          </div>
          : null}

      </div>
    </div>
  );
}

export default App;
