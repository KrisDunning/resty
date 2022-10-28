import {useState} from 'react';
import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import axios from 'axios';


function App (){
 const [count,setCount]=useState(0);
 const [data,setData]=useState();
 const [requestParams,setRequestParams]=useState({});


 const callApi = async(requestParams) => {

 await axios.get(requestParams.url)
  .then(function (response) {
    console.log(console.log("AXIOS RESPONSE DATA: ",response.data));
    setData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
    setRequestParams(requestParams);
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );
  }


export default App;
