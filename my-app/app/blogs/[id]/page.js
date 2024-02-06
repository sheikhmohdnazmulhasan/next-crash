import React from 'react';

const page = ({ params }) => {
    console.log(params);

    return (
        <div>
            <h2>Clicked blog is {params.id}</h2>
        </div>
    );
};

export default page;