import './App.css';
import {LoadImages, SearchImages} from './components/Api'
import Image from './components/Image'
import {useState} from 'react'
import Header from './components/Header'

function App() {

  const [query, setQuery] = useState()
  const [searchQ, setSearchQ] = useState()

  const data = LoadImages();
  // console.log(data)
  // console.log(query)

  const search = () => {
    setSearchQ(query)
  }
  const searchData = SearchImages(searchQ)
  // console.log(searchData)

  const reset = () => {
    setSearchQ('')
  }

  return (
    <div className="container">
      <Header setQuery={setQuery} search={search}/>
        <div className="reset" onClick={reset}>{searchQ && <button className="reset-btn">Reset</button>}
          {searchData && searchQ && searchData.length === 0 && <p>No results found</p>}
        </div>
        <div className="contain">
          {searchQ ? searchData.map((img, key) => (
            <Image src={img.urls.thumb} key={key}/>
          )) : data.map((img, key) => (
            <Image src={img.urls.thumb} key={key}/>
          ))}
        </div>
    </div>
  );
}

export default App;
