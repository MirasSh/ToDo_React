import React from "react";
import './Style.css'
import { Link, useNavigate } from 'react-router-dom';


const Todo = () => {
    const navigate = useNavigate()
    function Add () {
        navigate('/Todo')
    }
    return (
        <div>
            <div className="main_window">
                <p className="big_text">ZhaSa</p>
                <p className="text2">Жұмыстарды оңай басқару</p>
                <button className="kettik" onClick={Add}> Қосу</button>
            </div>
        </div>
    );
}

export default Todo