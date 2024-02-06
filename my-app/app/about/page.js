import React from 'react';
import img from '../../public/Images/z.png';
import Image from 'next/image';

const page = () => {
    // throw new Error('Manual Error')
    return (
        <main>
            <div className="">
                <Image src={img}/>
            </div>
        </main>
    );
};

export default page;