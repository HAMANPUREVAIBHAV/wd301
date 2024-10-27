/* eslint-disable react/prop-types */
import './TaskCard.css'
import React from "react";
const TaskCard = (props) => {
    console.log(props)
    var date = ""
    if (props.dueDate){
        date += "Due on: "+ props.dueDate;
    }else{
        date += "Completed on: "+ props.completedAtDate;
    }

    return (
        <div className="px-4 py-2 m-4 border-solid border-2 border-gray-800">
            <h1 className='text-medium md:text-xl font-semibold text-black-600'>{props.title}</h1>
            <p>{date}</p>
            <p>Assignee: {props.assigneeName}</p>
        </div>
    );
}

export default TaskCard;
