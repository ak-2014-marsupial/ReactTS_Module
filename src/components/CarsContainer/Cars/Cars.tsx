import React, {FC, useEffect, useState } from 'react';

import { carService } from '../../../services/carService';
import { ICar } from '../../../interfaces/carInterface';
import Car from '../Car/Car';
import css from "./Cars.module.css";
import {ISetState} from "../../../types/ISetState";


interface IProps{
    flag:boolean,
    setCarForUpdate: ISetState<ICar>
    trigger:()=>void

}
const Cars:FC<IProps> = ({flag,setCarForUpdate, trigger}) => {
    const [cars, setCars] =useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [flag]);

    const del = async(id:number)=>{
        await carService.deleteById(id),
        trigger()
    }

    return (
        <div className={css.cars}>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} del={del} />)}
        </div>
    );
};

export default Cars;