import React,{useState} from 'react';



const Hook = ()=> {

  const [age,setAge] = useState(21);
  const [name,setName] = useState('mnm');
  
  return (
    <div>
      <h1>Hook - instead of class</h1>
      <br/>
      Name: <input  type="text" value={name} onChange={e=> setName(e.target.value)}/> 
      <br/>
      Age: {age}
      <br/>
      <button onClick={()=>setAge(age + 1)}>Increment Age By One</button>
      <br/>
      state name:{name}  age:{age}
    </div>
  );
}
export default Hook;
