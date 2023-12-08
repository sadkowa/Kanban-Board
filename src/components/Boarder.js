import React from "react";
import Column from "./Column";

import { initColumns as columns } from "../providers/initData";

const Boarder = () => {

    const renderColumns = () => {
        return columns.map(item => <Column key={item.id} item={item}/>)
    }

    return (
        <section className="boarder">
            {renderColumns()}
        </section>
    )
}

export default Boarder