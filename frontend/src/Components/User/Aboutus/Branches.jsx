import React from 'react'

export default function Branches(props) {
    return (
        <div>
            { props.branches.map(branch => <h1>{branch.manager}, {branch.name} </h1>)}
        </div>
    )
}
