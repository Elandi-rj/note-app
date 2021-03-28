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
        history.push("/note-app/");
        window.location.reload();
    }

    function onClick() {
        removeSessionItem('title');
        removeSessionItem('content');
        history.push("/note-app/");
    }

    return (
        <div className="header-container">
            <button onClick={onClick} to="/note-app/" className="title" >Note Pad</button>
            <AwesomeButton className="titlebutton" onPress={Clear}>Clear All</AwesomeButton>
        </div>
    )
}
export default Header;