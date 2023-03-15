import { useState } from 'react';
import axios from 'axios';
import Element from "./Element";
import "./Home.css";

function Home() {
  const [data, setData] = useState();

  const searchProduct = async () => {
    let searchKey = document.querySelectorAll(".search-input")[0].value;
    const response = await axios.get(
      `http://127.0.0.1:5000/search?query=${searchKey}`
    );
    setData(response.data);
  }

  const data1 = data && data["result_seatgeek"];
  const data2 = data && data["result_stubhub"];
  const data3 = data && data["result_ticketmaster"];

  return (
    <div className="Home">
      <div className="search-section">
        <div className='search-part'>
          <input
            type="search"
            className="search-input"
          />
          <button type="button" className='search-submit' onClick={searchProduct}>Search</button>
        </div>
      </div>

      <div className="search">
        <div className="">
          {data1 &&
            data1.map((row, idx) => {
              return (
                <Element data={row} key={idx} />
              )
            })
          }
        </div>
        <div>
          {data2 &&
            data2.map((row, idx) => {
              return (
                <Element data={row} key={idx} />
              )
            })
          }
        </div>
        <div>
          {data3 &&
            data3.map((row, idx) => {
              return (
                <Element data={row} key={idx} />
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default Home;