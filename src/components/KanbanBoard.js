import React from "react";
import Header from "./Header";
import Boarder from "./Boarder";

const KanbanBoard = () => {
    return (
        <>
            <Header />
            <Boarder />
            <TaskForm />
        </>
    )
}

export default KanbanBoard