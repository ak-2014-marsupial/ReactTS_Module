import {joiResolver} from "@hookform/resolvers/joi";
import {SubmitHandler, useForm} from "react-hook-form";
import React, {FC, useEffect} from 'react';

import {ICar} from "../../../interfaces/carInterface";
import {carValidator} from "../../../validators/carValidator";
import {carService} from "../../../services/carService";
import css from "./CarForm.module.css"
import {ISetState} from "../../../types/ISetState";
import {Outlet} from "react-router-dom";


interface IProps {
    trigger: () => void,
    carForUpdate: ICar,
    setCarForUpdate: ISetState<ICar>
}

const CarForm: FC<IProps> = ({trigger, carForUpdate, setCarForUpdate}) => {

    const {
        reset, register,
        handleSubmit, setValue,
        formState: {errors, isValid}
    } = useForm<ICar>({mode: "onBlur", resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        trigger();
        reset();
    }
    const update:SubmitHandler<ICar>= async (car)=>{
        await carService.updateById(carForUpdate.id,car);
        trigger();
        setCarForUpdate(null)
        reset()
    }

    return (
        <div >
            <form className={css.car_form} onSubmit={handleSubmit(carForUpdate?update:save)}>
                <div className={css.col_1}>
                    <input type="text" placeholder={"brand"} {...register("brand")}/>
                    <input type="text" placeholder={"price"} {...register("price")}/>
                    <input type="text" placeholder={"year"} {...register("year")}/>
                    <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
                </div>
                <Outlet />
            </form>
            <div>
                {errors.brand && <div>brand : {errors.brand.message}</div>}
                {errors.price && <div>price : {errors.price.message}</div>}
                {errors.year && <div>year : {errors.year.message}</div>}
            </div>
        </div>
    );
}

export default CarForm;