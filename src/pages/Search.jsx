// import { useState } from 'react';
import axios from 'axios';
import Element from "./Element";
import BlankElement from "./BlankElement";
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading_icon from '../Loading_icon.gif';

function Search() {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("query");

    const startdate = searchParams.get("startdate");

    const enddate = searchParams.get("enddate");

    const { isLoading, data } = useQuery(["GETDATA", query], getData);

    async function getData() {

        try {
            const response = await axios.get(
                `http://127.0.0.1:5000/search?query=${query}&startdate=${startdate}&enddate=${enddate}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    const data1 = data && data["result_seatgeek"];
    const data2 = data && data["result_stubhub"];
    const data3 = data && data["result_ticketmaster"];

    if (isLoading)
        return (
            <div>
                <img className="loading_icon" alt="loading" src={Loading_icon}/>
            </div>
        )

    return (
        <div className="search">
            <div className='result-section'>
                <label className='section-title'>SeatGeek</label>
                
                {data1 ? (data1 &&
                    data1.map((row, idx) => {
                        return (
                            <Element data={row} key={idx} />
                        )
                    })) : (<BlankElement/>)
                }
            </div>
            <div className='result-section'>
                <label className='section-title'>Stubhub</label>
                {data2 ? (data2 &&
                    data2.map((row, idx) => {
                        return (
                            <Element data={row} key={idx} />
                        )
                    })) : (<BlankElement/>)
                }
            </div>
            <div className='result-section'>
                <label className='section-title'>TicketMaster</label>
                {data3 ? (data3 &&
                    data3.map((row, idx) => {
                        return (
                            <Element data={row} key={idx} />
                        )
                    })) : (<BlankElement/>)
                }
            </div>
        </div>
    );
}

export default Search;