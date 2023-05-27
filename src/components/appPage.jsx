import React, { useState } from "react";
import ToDoList from "./ToDoList";

function AppPage(props) {
    const [switchApp, setSwitchApp] = useState('');

    function SwitchToTodoList() {
       setSwitchApp('todolist') 
    }

    if (switchApp === ''){
        return(
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="card-body p-5" data-mdb-perfect-scrollbar="true">
                                <h3>Choose an app--</h3>
                                <button className="btn btn-primary ms-2" onClick={SwitchToTodoList}>To-Do List</button>
                                <button className="btn btn-primary ms-2">Expense Calculator</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

else if (switchApp === 'todolist') {
    return(
        <ToDoList user={props.user} />
    );
}


}

export default AppPage;