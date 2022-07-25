import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreament, increament } from '../../redux/state/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h2>Card Header</h2>
            </div>
            <div className='card-body'>
                <h4>{count}</h4>
                <div className='my-4'>
                    <button onClick={() => dispatch(increament())} className='btn btn-success'>Increase</button>
                    <button onClick={() => dispatch(decreament())} className='btn btn-primary mx-3'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;