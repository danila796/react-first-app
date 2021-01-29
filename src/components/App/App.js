import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const count = 3;
const App = () => {

    const items = [
        {
            value: 'Написать новое приложение',
            isDone: true
        },
        {
            value: 'Почистить зубы',
            isDone: false
        },
        {
            value: 'Лечь спать',
            isDone: false
        }
    ]

    return (
        <div className={ styles.wrap }>
            <h1 className={ styles.title }>Важные дела:</h1>
            <InputItem />
            <ItemList items = { items } />
            <Footer count = { count }/>
        </div>);
}

export default App;

