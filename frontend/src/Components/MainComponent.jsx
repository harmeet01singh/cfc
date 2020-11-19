import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './User/Header';
import Branches from './User/Aboutus/Branches';
import Newsletter from './User/Aboutus/Newsletter';
import Financials from './User/Aboutus/Financials';
import OurHistory from './User/Aboutus/OurHistory';
import Reviews from './User/Aboutus/Reviews';
import Vision from './User/Aboutus/Vision';
import Bloglist from './User/Blog/Bloglist';
import Campaigns from './User/Campaigns/Campaigns';
import Contact from './User/Contactus/Contact';
import Donate from './User/Contribute/Donate';
import Volunteer from './User/Contribute/Volunteer';
import Handin from './User/Contribute/Handin';
import Help from './User/Contribute/Help';
import Upcoming from './User/Eve/Upcoming';
import Past from './User/Eve/Past';
import AdminDash from './Admin/AdminDash';

class MainComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            branches: [],
            blogs: [],
            events: []
        }
    }

    componentDidMount() {
        axios.all([
            axios.get('http://localhost:5000/branches'),
            axios.get('http://localhost:5000/blogs'),
            axios.get('http://localhost:5000/events')
        ])
        .then(response => {
            this.setState({
                branches: response[0].data,
                blogs: response[1].data,
                events: response[2].data
            })
        });
    }

    handleDonate = e => {
        console.log(e.target);
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    {/* {this.state.branches.map(branch => <div>{branch.manager}, {branch.name} </div>)} */}
                    <Switch>
                        <Route exact path="/aboutus/branches" component={() => <Branches branches={this.state.branches} />} />
                        <Route exact path="/aboutus/financials" component={Financials} />
                        <Route exact path="/aboutus/history" component={OurHistory} />
                        <Route exact path="/aboutus/newsletters" component={Newsletter} />
                        <Route exact path="/aboutus/press" component={Reviews} />
                        <Route exact path="/aboutus/vision" component={Vision} />
                        <Route exact path="/blog" component={() => <Bloglist blogs={this.state.blogs} />} />
                        <Route exact path="/campaigns" component={Campaigns} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route exact path="/contribute/donate" component={() => <Donate handleSunmit={this.handleDonate} />} />
                        <Route exact path="/contribute/volunteer" component={Volunteer} />
                        <Route exact path="/contribute/handin" component={Handin} />
                        <Route exact path="/contribute/help" component={Help} />
                        <Route exact path="/events/upcoming" component={() => <Upcoming events={this.state.events} />} />
                        <Route exact path="/events/past" component={() => <Past events={this.state.events} />} />
                        
                        <Route exact path="/admin" component={AdminDash} />
                    </Switch>
                    {/*<Newsletter/>*/}
                </div>
            </BrowserRouter>
        )
    }
}
export default MainComponent
