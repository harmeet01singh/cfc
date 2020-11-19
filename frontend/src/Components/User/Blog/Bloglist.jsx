import React from 'react'

export default function Bloglist(props) {
    return (
        <div>
            { props.blogs.map(blog => <div> { blog.title }</div> ) }
        </div>
    )
}
