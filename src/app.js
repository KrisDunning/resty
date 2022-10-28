import {useReducer, useState} from 'react';
import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './history/history'
import axios from 'axios';


export const historyInitialState={
  headers:{},
  data:{},
}
export const historyReducer=(state,action)=>{
  return {
    headers:action.headers,
    data:action.data
  }
}

function App (){
 const [data,setData]=useState();
 const [requestParams,setRequestParams]=useState({});
 const [history,dispatch]=useReducer(historyReducer,historyInitialState);

 const callApi = async(requestParams) => {

 await axios.get(requestParams.url)
  .then(function (response) {
    console.log(console.log("AXIOS RESPONSE DATA: ",response.data));
    setData(response.data);
    dispatch({headers:response.headers,data:response.data});
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
        <History history={history} />
        <Footer />
      </>
    );
  }


export default App;
