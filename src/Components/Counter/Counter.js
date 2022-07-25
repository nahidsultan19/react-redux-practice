import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {

    const count = useSelector((state) => state.counter.value)

    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h2>Card Header</h2>
            </div>
            <div className='card-body'>
                <h4>{count}</h4>
                <div className='my-4'>
                    <button className='btn btn-success'>Increase</button>
                    <button className='btn btn-primary mx-3'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;