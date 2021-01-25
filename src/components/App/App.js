import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

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
        <div>
            <h1>Важные дела:</h1>
            <InputItem />
            <ItemList items = { items } />
            <Footer count = { count }/>
        </div>);
}

export default App;

