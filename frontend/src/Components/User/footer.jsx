import React from 'react';
import {Link} from 'react-router-dom';

export default function footer() {
    return (
        <div className="footer">
                <div class="container">
                <div class="row align-items-end">
                <br></br>
                    <div class="col-sm">
                    <br></br>
                        <b className="row-md-auto">About us</b>
                        <p><Link className="row-md-auto" to="/aboutus/newsletters">Newsletters</Link></p>
                        <p><Link className="row-md-auto" to="/aboutus/branches">Branches</Link></p>
                        <p><Link className="row-md-auto" to="/aboutus/financials">Financials</Link></p>
                        <p><Link className="row-md-auto" to="/aboutus/press">Press Reviews</Link></p>
                        <p><Link className="row-md-auto" to="/aboutus/history">History</Link></p>
                        <p><Link className="row-md-auto" to="/aboutus/vision">Vision</Link></p>
                    </div>
                    <div class="col-sm">
                    <br></br>
                    <b className="row-md-auto">Campaigns</b>
                        <p><Link className="row-md-auto" to="/campaigns">Campaigns</Link></p>
                        <p><Link className="row-md-auto" to="/aboutus/branches">Events</Link></p>
                    <b className="row-md-auto">Events</b>
                        <p><Link className="row-md-auto" to="/events/upcoming">Upcoming Events</Link></p>
                        <p><Link className="row-md-auto" to="/events/past">Past Events</Link></p>
                    
                    </div>
                    <div class="col-sm">
                    <br></br>
                    <b className="row-md-auto">Contribute</b>
                        <p><Link className="row-md-auto" to="/contribute/donate">Donate</Link></p>
                        <p><Link className="row-md-auto" to="/contribute/volunteer">Vounteer</Link></p>
                        <p><Link className="row-md-auto" to="/contribute/help">Ask For Help</Link></p>
                        <p><Link className="row-md-auto" to="/contribute/handin">Hand In Donations</Link></p>
                    </div>
                </div>
                <br></br>
                </div>
        </div>
    )
}
