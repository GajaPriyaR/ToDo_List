import "./App.css";

function App() {
  window.onload=function(){
    let btnEl = document.getElementById("button-addon2");
    let inputEl = document.getElementById("input-addon2");
    let todosList = document.getElementById("todosList");
    let todos = [];
  
   btnEl.addEventListener('click',()=>{
    todos.push(inputEl.value);
    console.log(todos);
    addTodo(inputEl.value);
    inputEl.value = "";
   })
  
    function addTodo(todo) {
      let para = document.createElement("p");
      para.innerText = todo;
      todosList.appendChild(para);
  
      para.addEventListener("click", () => {
        para.style.textDecoration = "line-through";
        remove(todo);
      });
      para.addEventListener("dblclick", () => {
        todosList.removeChild(para);
        remove(todo);
      });
    }
  
    function remove(todo) {
      let index = todos.indexOf(todo);
      if (index > -1) {
        todos.splice(index, 1);
      }
    }
  }
  return (
    <div className="App">
       <div className="container text-center">
        <div className="pt-5 fw-bold fs-2" style={{color:"white"}}>TODO List</div>
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col-10 col-lg-4">
            <div className="card shadow p-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="input-addon2"
                  placeholder=""
                  aria-label=""
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  id="button-addon2"
                >
                  Add
                </button>
              </div>

              <div id="todosList"></div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
