import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = (props) => {
    return (
        <div className='my-5 container d-grid'>
            <Button variant="warning" size='' type='submit'className='px-5' onClick={()=>props.consultarAPI()}>Obtener Frase</Button>
        </div>
    );
};

export default Btn;