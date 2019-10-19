import React from 'react';
import { Link } from "react-router-dom";
import "./Menu.sass"

export default () => (
    <div className="Menu">
        <Link to="/">Главная</Link>
        <Link to="/send">Отправить</Link>
        <Link to="/recive">Получить</Link>
    </div>
)