import './history.scss';
function History(props) {
    return <span id='history'>{JSON.stringify(props.history)}</span>  
}

export default History;