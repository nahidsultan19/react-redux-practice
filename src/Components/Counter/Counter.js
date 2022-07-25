import React from 'react';

const Counter = () => {
    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h2>Card Header</h2>
            </div>
            <div className='card-body'>
                <h4>00</h4>
                <div className='my-4'>
                    <button className='btn btn-success'>Increase</button>
                    <button className='btn btn-primary mx-3'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;