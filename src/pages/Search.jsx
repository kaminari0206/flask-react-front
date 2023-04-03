import { useState } from 'react';
import axios from 'axios';
import Element from "./Element";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function Search() {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("query");

    const startdate = searchParams.get("startdate");

    const enddate = searchParams.get("enddate");

    const { isLoading, data } = useQuery(["GETDATA", query], getData);

    async function getData() {
        console.log('query', query)
        console.log('startdate', typeof(startdate))
        console.log('enddate', enddate)
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
                <h1>Loading...</h1>
            </div>
        )

    return (
        <div className="search">
            <div className='result-section'>
                <label className='section-title'>TicketMaster</label>
                {data1 &&
                    data1.map((row, idx) => {
                        return (
                            <Element data={row} key={idx} />
                        )
                    })
                }
            </div>
            <div className='result-section'>
                <label className='section-title'>SeatGeek</label>
                {data2 &&
                    data2.map((row, idx) => {
                        return (
                            <Element data={row} key={idx} />
                        )
                    })
                }
            </div>
            <div className='result-section'>
                <label className='section-title'>Stubhub</label>
                {data3 &&
                    data3.map((row, idx) => {
                        return (
                            <Element data={row} key={idx} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Search;