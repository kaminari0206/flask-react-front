import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import moment from 'moment';

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [value, setValue] = React.useState([
    dayjs('2022-04-17'),
    dayjs('2022-04-21'),
  ]);

  function handleSubmit(e) {
    let startDate=moment(value[0].$d).format('MM/DD/YYYY');
    let endDate=moment(value[1].$d).format('MM/DD/YYYY');

    console.log('dddddddddd',startDate);
    e.preventDefault();
    navigate(`/search?query=${search}&startdate=${startDate}&enddate=${endDate}`);
  }

  return (
    <div className="home">
      <div className="search-section">
        <div className='search-part'>
          <form onSubmit={handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs} style={{"margin":"10px"}}>
              <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                <DemoItem label="Select Start Date and End Date" component="DateRangePicker" style={{"textAlign":"center"}}>
                  <DateRangePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <input
              type="search"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className='search-submit'>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;