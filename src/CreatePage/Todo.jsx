import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState(() => {
    // localStorage загружаем список 
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  }); // Если элементов нет то он просто возвращет путой массив
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  } //input для добавления новых задач в список

  function handleAddTodo() {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          text: inputValue,
          id: Math.random().toString(36).substring(7),
          checked: false // добавляем свойство checked со значением false
        },
      ]);
      setInputValue("");
    }
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  } //Удаление задачи из массива 

  function handleCheckboxClick(index) {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  } // Галочка нажатие и разжатие если это так можно сказать 

  function handleExit() {
    navigate("/");
  } //Навигация по роутеру 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // При изменении состояния списка todos сохраняем его в localStorage

  return (
    <div>
      <div className="main_window2">
        <div className="flex">
          <img className="img_1" src="./public/Ellipse 1.svg" />
          <div className="text_img">
            <p className="salem">
              Сәлем, Мико 👋🏽
              <br />
              <span className="tapsyrma">{todos.length} тапсырма бар</span>
            </p>
          </div>
        </div>
        <div>
          <p className="big_text2">ZhaSa</p>
        </div>
        <div>
          <button className="shygu" onClick={handleExit}>
            Шығу
          </button>
        </div>
      </div>
      <div className="tapsyrma_kosu">
        <div>
          <p className="winfow3_text">Жаңа тапсырма</p>
        </div>
        <div>
          <input
            className="input_style"
            type="text"
            placeholder="Тақырып"
            value={inputValue}
            onChange={handleInputChange}
          />{" "}
          <button className="kettik" onClick={handleAddTodo}>
            Қосу
          </button>
          <br />
        </div>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <div key={todo.id} className="todo-item">
            <input type="checkbox" className="size_blok" />
            <p className="redactor">{todo.text}</p>
            <button onClick={() => handleDelete(index)}>Удалить</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;