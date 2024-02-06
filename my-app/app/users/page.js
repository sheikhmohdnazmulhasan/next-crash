import getAllPosts from '@/lib/getAllPosts';
import React from 'react';

const page = async () => {

    const users = await getAllPosts();

    console.log(users);

    return (
        <div>
            Hello World
        </div>
    );
};

export default page;