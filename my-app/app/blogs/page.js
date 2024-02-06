import Link from "next/link"

export default function Blogs() {

    const blogs = [{
        id: 1,
        title: 'hello',
        des: 'xxxxxx'
    },
    {
        id: 2,
        title: 'hello 2',
        des: 'xxxxxx 2'
    }]

    return (
        <div className="">
            <p>  {blogs.map(blog =>

                <Link href={`/blogs/${blog.id}`}><li key={blog.title}>{blog.title}</li></Link>
            )} </p>
        </div>
    )
}