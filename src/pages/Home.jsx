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
  let date = new Date();
  console.log(date.getMilliseconds())
  let initstart = moment(date).format('Y-MM-DD');
  let initend = moment(date).format('Y-MM-DD');
  const [search, setSearch] = useState("");
  const [value, setValue] = React.useState([
    dayjs(initstart),
    dayjs(initend),
  ]);

  function handleSubmit(e) {
    let startDate=moment(value[0].$d).format('Y-MM-DD');
    let endDate=moment(value[1].$d).format('Y-MM-DD');

    e.preventDefault();
    navigate(`/search?query=${search}&startdate=${startDate}&enddate=${endDate}`);
  }

  return (
    <div className="home">
      <div className="search-section">
        <div className='search-part'>
          <form onSubmit={handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                <DemoItem label="Select Start Date and End Date" component="DateRangePicker">
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