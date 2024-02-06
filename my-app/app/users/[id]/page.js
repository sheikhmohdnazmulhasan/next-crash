import React from 'react';
import getUser from '@/lib/getUser';

const page = async ({ params }) => {
    const user = await getUser(params.id);

    console.log(user);

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            {params.id}
        </div>
    );
};

export default page;