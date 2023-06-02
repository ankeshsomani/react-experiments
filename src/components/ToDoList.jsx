import { ChangeEvent, useState, useEffect } from "react";
import Login from "./login";
import AppPage from "./appPage";


function ToDoList(props) {

    // State variables declaration
    const [task, setTask] = useState([]);
    const [value, setValue] = useState('');
    const [state, setState] = useState('loggedOn')
    const id = task.length + 1;
    window.$user = props.user;


    // Task Adding function
    const handleClick = () => {
        if (value === '') {
            alert('Invalid Value!')
        }
        else {
            setTask((prev) => [
                ...prev,
                {
                    id: id,
                    task: value,
                },
            ]);
        }
        setValue('')
    };

    // setting input value to state variable
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    // useEffect hook for time in HH:MM:SS format
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // function for user log off
    const LogOff = () => {
        setState('loggedOff')
    }

    const SwitchToAppPage = () => {
        setState('appPage')
    }

    // creates new list after deletion of a task
    function createNewListAfterDeletion(prev, idToRemove) {
        console.log('id to remove is :--' + idToRemove);
        console.log('list before removel is:--' + JSON.stringify(prev));

        const newList = prev.filter((task) => task.id !== idToRemove);
        console.log('list after removel is:--' + JSON.stringify(newList));
        return newList;
    }

    // function for deletion of task
    const handleDelete = (taskToRemove) => {
        console.log(`index passed is :-- ${taskToRemove}`);
        setTask((prev) => createNewListAfterDeletion(prev, taskToRemove));
    };

    // returns user inerface
    if (state === 'loggedOn')
        return (
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card shadow-lg">
                                <div className="card-body p-5" data-mdb-perfect-scrollbar="true">
                                    <h3>Welcome {window.$user} , the time is {time.toLocaleTimeString()}</h3>
                                    <button onClick={LogOff} className="btn btn-primary">Log Off</button>&nbsp;&nbsp;
                                    <button onClick={SwitchToAppPage} className="btn btn-primary">App Page</button>
                                    <br /><br />
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <div className="form-outline flex-fill">
                                            <label className="form-label" for="form2">New task...</label>
                                            <input value={value} type="text" id="form2" className="form-control" onChange={handleChange} />
                                        </div>
                                        <button className="btn btn-primary ms-2" onClick={handleClick}>Add</button>
                                    </div>
                                    {/* map() function to render state array */}
                                    {task.map((todo, index) => {
                                        return (
                                            <ul className="list-group list-group-horizontal rounded-0 bg-transparent" key={index} id={index}>
                                                <li
                                                    className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                                                    <div className="form-check">
                                                        <input className="form-check-input me-0" type="checkbox" />
                                                    </div>
                                                </li>
                                                <li
                                                    className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent"
                                                >
                                                    <p className="lead fw-normal mb-0">{todo.task}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    else if (state === 'loggedOff') {
        return (
            <Login />
        );
    }

    else {
        return (
            <AppPage />
        )
    }

}

export default ToDoList;