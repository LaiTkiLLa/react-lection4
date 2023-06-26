import React, {useState} from "react";
import {Workout} from "../App";

export const Commit = ( props: {handleSubmit: any}) => {

    const [form, setForm] = useState<Workout>({
        date: '',
        distance: '',
    })

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.handleSubmit({
            date: form.date,
            distance: form.distance
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input placeholder="дд.мм.гггг" value={form.date} type="date" id='date' name='date' className="form-date" onChange={handleChange}/>
                <label htmlFor="distance" >Пройдено км</label>
                <input placeholder="0 км" value={form.distance} type="text" id='distance' name='distance' className="form-km" onChange={handleChange}/>
                <button className="form-add" type='submit'>OK</button>
            </form>
        </div>

        )

}