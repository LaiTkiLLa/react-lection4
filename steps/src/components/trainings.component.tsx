import {Workout} from "../App";
import uuid from 'react-uuid';

export const Trainings = (props: {training: Workout[], handleDelete: any}) => {

    const sortedDates = props.training.sort(function (a,b){
        return +new Date(b.date) - +new Date(a.date)
    })

    return (
        <div>
            <div className="list-headers">
                <div className="list-headers-date">Дата</div>
                <div className="list-headers-km">Км</div>
            </div>
            <div className="list-list">
                {sortedDates.map((item) => (
                    <div className="item" key={uuid()}>
                        <div className="item-date">{item.date}</div>
                        <div className="item-km">{item.distance}</div>
                        <div className="item-buttons-block">
                            <div className="item-del material-icons" onClick={() => props.handleDelete(item.date)}>delete_outline</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}