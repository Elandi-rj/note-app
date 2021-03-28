import React, { useState, useEffect } from 'react';
import './style.css';
import Row from '../Row/Row';
import { setItem, getItem } from '../../services/storage';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const [rowdata, setRowdata] = useState([]);

    useEffect(() => {
        let storedRows = getItem('rowdata', []);
        setRowdata(storedRows);
    }, []);

    function deleteRow(index) {
        let new_array = Array.from(rowdata);
        new_array.splice(index, 1);
        setRowdata(new_array);
        setItem('rowdata', new_array);
    }

    function renderRows() {
        let items = [];
        for (let i = 0; i < rowdata.length; i++) {
            function onRowDelete() {
                deleteRow(i);
            }
            if (rowdata[i][0] && rowdata[i][1]) {
                items.push(
                    <Row
                        index={i}
                        value={rowdata[i]}
                        onRowDelete={onRowDelete}
                    />
                );
            }
        }
        return items;
    }

    function onSubmit() {
        console.log("hi")
        history.push('/note-app/add');
    }
    return (
        <div className="home-container">

            <AwesomeButton className="awsbtn" onPress={onSubmit}>Add a note</AwesomeButton>

            <h1>Home Page</h1>
            {renderRows()}
        </div>
    )
}
export default Home;