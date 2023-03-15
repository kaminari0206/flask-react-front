import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  }

  return (
    <div className="home">
      <div className="search-section">
        <div className='search-part'>
          <form onSubmit={handleSubmit}>
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