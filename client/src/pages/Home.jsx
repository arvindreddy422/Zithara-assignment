import { useState, useEffect } from 'react'
import { fetchData } from '../services/api'
import Table from '../components/Table'
import './home.css'

const Home = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')

  const [currPage, setCurrPage] = useState(1)
  const recordsPerPage = 20
  const lastIndex = currPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = data.slice(firstIndex, lastIndex)
  const nPages = Math.ceil(data.length / recordsPerPage)
  const numbers = [...Array(nPages + 1).keys()].slice(1)
// console.log(numbers)
  function prevPage() {
    if(currPage !== 1){

      setCurrPage(currPage - 1)
    }
  }
  function changeCPage(n) {
    setCurrPage(n)
  }
  function nextPage() {
    if(currPage !== nPages){
      setCurrPage(currPage + 1)
    }
  }

  useEffect(() => {
    fetchData(search, sortBy).then((data) => setData(data))
  }, [search, sortBy])

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="created_at">Date</option>
        <option value="created_at DESC">Time</option>
      </select>
      <Table data={records} />
      <nav>
        <ul className='pagination'>
          <li className="pi" onClick={prevPage}>
            Prev
          </li>
          {numbers.map((n, i) => (
            <li
              className={`pi ${currPage === n ? 'active' : ''}`}
              onClick={()=> changeCPage(n)}
              key={i}
            >
              {n}
            </li>
          ))}

          <li className="pi" onClick={nextPage}>
            Next
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
