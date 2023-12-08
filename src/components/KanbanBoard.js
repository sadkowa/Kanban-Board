import React, {useState} from "react";
import Header from "./Header";
import Boarder from "./Boarder";
import TaskForm from "./TaskForm";
import TasksContext from "../context/TasksContext";
import { initTasks } from './providers/initData';
import { useStorage } from "../hooks";


const KanbanBoard = () => {
    const { Provider } = TasksContext
    const [tasks, setTasks] = useState(initTasks)

    const [getItem, setItem] = useStorage()

    const addTask = (task) => {
        setTasks(prevTasks => {
            const changedTasks = [...prevTasks, task]
            setItem('tasks', changedTasks)

            return changedTasks
        })
    }


    return (
        <>
            <Header />
            <Provider value={{ tasks, moveTask, deleteTask, addTask }}>
                <Boarder />
                <TaskForm />
            </Provider>
        </>
    )
}

export default KanbanBoard