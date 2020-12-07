import React,{useState} from 'react';
import Tittle from "./TittleSection/Tittle";
import Searchbar from "./SearchbarSection/Searchbar";
import ImageList from "./ImageListSection/ImageList";
import Footer from "./FooterSection/Footer";

import data from "./APICALL/ApiCall";
import dataPexel from "./APICALL/ApiCallPexels";
function App() {
  const [dataAPIUnsplash, setDataApiUnsplash] = useState({results:data});
  const [dataAPIPexel, setDataApiPexel] = useState({photos:dataPexel});

  function GetData(data,pexelsData){
    setDataApiUnsplash(data);
    setDataApiPexel(pexelsData);
  }
  return (
    <div className="App">
        <Tittle />
        <Searchbar addDataAPI={GetData} />
        <ImageList key={dataAPIUnsplash+dataAPIPexel} DataFromAPI = {dataAPIUnsplash} DataFromApiPexel={dataAPIPexel} />
        <Footer />
    </div>
  );
}

export default App;
