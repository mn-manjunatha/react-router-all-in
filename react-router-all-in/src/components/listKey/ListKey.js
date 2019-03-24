import React from 'react';
import Employee from './Employee';
import UniqueId from 'react-html-id'

class ListKey extends React.Component {

    constructor(){
        super();
        UniqueId.enableUniqueIds(this);
        this.state={
            employees:[{id:this.nextUniqueId(), name:'mnm',age:25},
            {id:this.nextUniqueId(),name:'rao',age:28},
            {id:this.nextUniqueId(),name:'kiran',age:29}]
        }
    }

    delEvent=(index,e)=>{
        const employees = Object.assign([],this.state.employees);
        employees.splice(index,1);
        this.setState({employees:employees});
    }

    changeEmployeeName=(id,e)=>{

        console.log(id,e);

        const index = this.state.employees.findIndex(emp=>{
            return emp.id===id
        })

        const emp = Object.assign({},this.state.employees[index]);
        emp.name = e.target.value;

        const employees = Object.assign([],this.state.employees);
        employees[index] = emp;

        this.setState({employees:employees});

    }

  render() {
    return (
      <div>
        <h1>List and Keys</h1>
        <ul>
            {
                this.state.employees.map((emp,index)=>{
                    return(
                        <Employee 
                        key={emp.id}
                        age={emp.age}
                        
                        changeEvent={this.changeEmployeeName.bind(this,emp.id)}
                        delEvent={this.delEvent.bind(this,index)}>
                        {emp.name}
                        </Employee>
                    );
                })
            }
        </ul>
      </div>
    );
  }
}

export default ListKey;

