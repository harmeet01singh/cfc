import React from 'react';
import {Link} from 'react-router-dom';

export default function footer() {
    return (
        <div className="footer">
                <div className="row">
                    <div className="col">
                        <b>About us</b>
                        <Link className="row" to="/aboutus/branches">Branches</Link>
                        <Link className="row" to="/aboutus/branches">Branches</Link>
                    </div>
                </div>
        </div>
    )
}
