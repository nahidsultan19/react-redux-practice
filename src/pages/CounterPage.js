import React from 'react';
import Counter from '../Components/Counter/Counter';

const CounterPage = () => {
    return (
        <div className='container mt-5 col-md-6'>
            <div className='row'>
                <Counter />
            </div>
        </div>
    );
};

export default CounterPage;