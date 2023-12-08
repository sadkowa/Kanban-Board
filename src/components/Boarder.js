import React from "react";

const Boarder = () => {

    const renderColumns = () => {
        return 'kolumny'
    }

    return (
        <section className="boarder">
            {renderColumns()}
        </section>
    )
}

export default Boarder