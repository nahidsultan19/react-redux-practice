import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreament, increament } from '../../redux/state/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='card border-0 shadow-lg'>
            <div className="card-header bg-secondary">
                <h2 className='text-white text-center'>Counter APP</h2>
            </div>
            <div className='card-body text-center'>
                <h4 className='fs-1'>{count}</h4>
                <div className='my-4'>
                    {count > 0 && <button onClick={() => dispatch(decreament())} className='btn btn-primary mx-3'>Decreament</button>}
                    <button onClick={() => dispatch(increament())} className='btn btn-success'>Increament</button>
                </div>
            </div>
        </div >
    );
};

export default Counter;