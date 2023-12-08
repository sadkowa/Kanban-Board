import React from 'react';


function TaskForm() {

    return (
        <div className='form__box'>
            <form className="form" >
                
                <label className="form__label" htmlFor='submit'>
                    <input className='form__input form__input--button' id='submit' type="submit" name="submit" value="Add new task" />
                </label>
            </form>
        </div>
    )
}

export default TaskForm;