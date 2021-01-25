import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const count = 3;
const App = () => {

    const items = [
        {
            value: 'Написать новое приложение'
        },
        {
            value: 'Почистить зубы'
        },
        {
            value: 'Лечь спать'
        }
    ]

    return (
        <div className="wrap">
            <h1 className="wrap__title">Важные дела:</h1>
            <InputItem />
            <ItemList items = { items } />
            <Footer count = { count }/>
        </div>);
}

export default App;

