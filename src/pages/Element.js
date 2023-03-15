import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Element(props) {
    const { data } = props
    return (
        <div className="element">
            <div className='element-header'>
                <h3 className='element-name'>{data.name}</h3>
                <h5 className='element-venus'>{data.venue}</h5>
            </div>
            <div className='element-body'>
                <div className='element-time-section'>
                    <label className='element-date'>{data.date}</label>
                    <label className='element-time'>{data.time}</label>
                    <label className='element-timezone'>{data.timeZone}</label>
                </div>
                <div className='element-other-section'>
                    <div className='element-price-section'>
                        <label className='element-price-title'>Price: </label>
                        <label className='element-price'>Min: {data.minPrice}</label>
                        <label className='element-price'>Max: {data.maxPrice}</label>
                    </div>
                    <div className='element-view'>
                        <a href={data.url}>view</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Element;