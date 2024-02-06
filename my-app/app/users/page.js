import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const page = async () => {

    const users = await getAllPosts();

    console.log(users);

    return (
        <div>
            {users.map(user => <p> <Link href={`/users/${user.id}`}>{user.name}</Link> </p>)}
        </div>
    );
};

export default page;