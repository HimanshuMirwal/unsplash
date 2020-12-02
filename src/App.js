import React,{useState} from 'react';
import Tittle from "./TittleSection/Tittle";
import Searchbar from "./SearchbarSection/Searchbar";
import ImageList from "./ImageListSection/ImageList";
import Footer from "./FooterSection/Footer";

import data from "./APICALL/ApiCall";
function App() {
  const [dataAPI, setDataApi] = useState({results:data});
  function GetData(data){
    setDataApi(data);
  }
  return (
    <div className="App">
        <Tittle />
        <Searchbar addDataAPI={GetData} />
        <ImageList  DataFromAPI = {dataAPI} />
        <Footer />
    </div>
  );
}

export default App;
