import React1 from 'react';
import tiger_logo from './Tiger_logo.png';
import './App.css';

//class based component
class App extends React1.Component{
  
  constructor(props){
    super(props);
    this.state = {
                    newItem: "",
                    list: []
                 }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem={
                      id: Date.now(),
                      value: todoValue,
                      isDone: false
                    };
      const list = [...this.state.list]; 
      list.push(newItem);
      
      this.setState({
                      list: list,   //update list with list
                      newItem: ""   //update newItem with ""
                    });   
    } 
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});

  }
  
  updateInput(input){
    this.setState({newItem: input});
  }
  
 render(){
   return (
     <div>
        <img src={tiger_logo} alt="tiger" width="100" height="100" className="tiger_logo"></img>
        <h1 className="app-title">THINGS TO DO LIST</h1>
        <div className="container">Add an Item...<br />
            <input type="text" className="input-text" placeholder="Write a Todo" required 
            value={this.state.newItem} 
            onChange={e => this.updateInput(e.target.value)}
            />

            <button 
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >Add ToDo
            </button>
  
          <div className="list">
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li key={item.id}>
                      <input
                            type="checkbox"
                            name="isDone"
                            checked={item.isDone}
                            //onChange={() => {}} 
                      />
                      {item.value}
                      
                      <button 
                            className="btn"
                            onClick={()=> this.deleteItem(item.id)}
                            >Delete
                      </button>
                    </li>
                  )
                })}
                  <li> 
                    <input type="checkbox" name="" id=""/>
                    Record YouTube Videos
                    <button className="btn">Delete</button>
                  </li>
              </ul>
          </div>
        </div>
     </div>
   );
 }
}
export default App;