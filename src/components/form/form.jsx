import React ,{useState} from 'react';
import './form.scss';

function Form (props) {
const [method,setMethod] = useState('a');
const [theUrl,setUrl] = useState('b');

  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      method:method,
      url: theUrl,
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e)=> setUrl(e.target.value)} />
            <button className='submitBTN'
            type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={()=>setMethod('GET')}>GET</span>
            <span onClick={()=>setMethod('POST')}>POST</span>
            <span onClick={()=>setMethod('PUT')}>PUT</span>
            <span onClick={()=>setMethod('DELETE')}>DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
