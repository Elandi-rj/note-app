import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeItem, removeSessionItem } from '../../services/storage';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './style.css';

function Header() {
    let history = useHistory();
    function Clear() {
        removeItem('rowdata');
        history.push("/");
        window.location.reload();
    }

    function onClick() {
        removeSessionItem('title');
        removeSessionItem('content');
        history.push("/");
    }

    return (
        <div className="header-container">
            <button onClick={onClick} to="/" className="title" >Note Pad</button>
            <AwesomeButton className="titlebutton" onPress={Clear}>Clear All</AwesomeButton>
        </div>
    )
}
export default Header;