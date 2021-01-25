import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ todoItem }) => (
    <ul>
        <li><Item todoItem = { todoItem } /></li>
        <li><Item todoItem = { 'Почистить зубы' } /></li>
        <li><Item todoItem = { 'Лечь спать' } /></li>
    </ul>
);

export default ItemList;