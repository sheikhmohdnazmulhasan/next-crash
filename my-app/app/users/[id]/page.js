import React from 'react';
import getUser from '@/lib/getUser';

export async function generateMetadata({ params }) {
    const user = await getUser(params.id);

    return {
        title: user.name,
        description: user.email,
    }
}

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