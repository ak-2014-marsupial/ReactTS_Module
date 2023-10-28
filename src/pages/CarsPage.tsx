import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import Cars from '../components/CarsContainer/Cars/Cars';
import CarForm from "../components/CarsContainer/CarForm/CarForm";
import {ICar} from "../interfaces/carInterface";

const CarsPage = () => {
    const [flag, setFlag] = useState(false);

    const [carForUpdate, setCarForUpdate] =useState<ICar >(null)



    const trigger = (): void => {
        setFlag(prev => !prev);
    }

    return (
        <div >
            <div>
                <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
            </div>
        </div>
    );
};

export default CarsPage;