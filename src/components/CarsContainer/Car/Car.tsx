import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {ICar} from '../../../interfaces/carInterface';
import css from "./Car.module.css"
import {ISetState} from "../../../types/ISetState";

interface IProps {
    car: ICar,
    setCarForUpdate:ISetState<ICar>,
    del:(id:number)=>void,

}

const Car: FC<IProps> = ({car,setCarForUpdate,del}) => {

    const {id, brand, price, year} = car;
    const navigate = useNavigate()

    return (
        <div className={css.car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={css.btn_group}>
                <button onClick={()=>setCarForUpdate(car)}>Update</button>
                <button onClick={()=>del(id)}>Delete</button>
                <button onClick={()=> navigate('select',{state:{car}})}>Select</button>
            </div>

        </div>
    );
};
export default Car;