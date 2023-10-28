import React, {FC} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import css from "./SelectedCar.module.css"


interface IProps{
    car:ICar;

}
const SelectedCar:FC<IProps> = ({car}) => {
    const{id,year,price,brand}=car;

    return (
        <div className={css.selected_car}>
            <div> id: {id}</div>
            <div> year: {year}</div>
            <div> price: {price}</div>
            <div> brand: {brand}</div>
        </div>
    );
};

export default SelectedCar;