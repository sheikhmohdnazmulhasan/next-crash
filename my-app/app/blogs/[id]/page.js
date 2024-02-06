"use client";

import { notFound } from 'next/navigation';
import React, { useState } from 'react';

const page = ({ params }) => {
    console.log(params);

    const [xx, setXx] = useState('')

    if (params.id >= 3) {
        notFound();
    }

    const handleMulti = (event) => {
        event.preventDefault();
        const v1 = parseFloat(event.target.value1.value)
        const v2 = parseFloat(event.target.value2.value);

        setXx(v1 * v2)


    }

    return (
        <div>
            <h2>Clicked blog is {params.id}</h2>

            <p>{xx}</p>

            <form className="mt-10 text-blue-900" onSubmit={handleMulti}>
                <input type="number" name="value1" id="" className='!text-black' /> <br /> <br />
                <input type="number" name="value2" id="" className='!text-red-600' /> <br /> <br />
                <button className='py-1 px-3 bg-green-400'>Click Me</button>
            </form>

        </div>
    );
};

export default page;