import React from 'react';
import '../assets/styles/components/WeeklyItem.scss';
import image from '../assets/static/lunch.jpg';
import price from '../assets/static/servings.png';
import list from '../assets/static/list.png';
import clock from '../assets/static/time.png';


const WeeklyItem = (props) => {
    const {day, data} = props;
    console.log(day, data)
    return(
        <div className="weeklyItem__container">
            <h3 className="weeklyItem__day">{day}</h3>
            <div className="weeklyItem__breakfast">
                <img className="weeklyItem__img" src={data[2].images} />
                <h4 className="weeklyItem__title">{data[2].title}</h4>
            </div>
            <div className="weeklyItem__lunch">
                <img className="weeklyItem__img" src={data[0].images} />
                <h4 className="weeklyItem__title">{data[0].title}</h4>
            </div>
            <div className="weeklyItem__dinner">
                <img className="weeklyItem__img" src={data[1].images} />
                <h4 className="weeklyItem__title">{data[1].title}</h4>
            </div>
            <div className="weeklyItem__dessert">
                <img className="weeklyItem__img" src={data[4].images} />
                <h4 className="weeklyItem__title">{data[4].title}</h4>
            </div>
            
        </div>
    )
}
  

export default WeeklyItem;