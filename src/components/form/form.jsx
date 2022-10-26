import {useState} from 'react';
import './form.scss';
// const http=require('http');

function Form (props) {
const [method,setMethod] = useState('GET');
const [theUrl,setUrl] = useState('http:exampleURL.com');
const [formJSON,setFormJSON] = useState({});


  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      method:method,
      url: theUrl,
      textarea:formJSON,
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
            <span id="get" onClick={()=>setMethod('GET')} >GET</span>
            <span id="post" onClick={()=>setMethod('POST')}>POST</span>
            <span id="put" onClick={()=>setMethod('PUT')}>PUT</span>
            <span id="delete" onClick={()=>setMethod('DELETE')}>DELETE</span>
          </label>
        <label id='JSON_Text_Area'>
          <textarea rows={6} defaultValue={'{\nPlease enter POST and PUT JSON request data here.\n}'} onChange={setFormJSON}/>
        </label>
        </form>
      </>
    );
}

export default Form;
