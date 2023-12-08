import React from "react";
import Header from "./Header";
import Boarder from "./Boarder";
import TaskForm from "./TaskForm";
import TasksContext from "../context/TasksContext";
import { initTasks } from './providers/initData';


const KanbanBoard = () => {
    const { Provider } = TasksContext

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