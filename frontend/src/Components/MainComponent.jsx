import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './User/Header';
import Footer from './User/footer';
import Branches from './User/Aboutus/Branches';
import Newsletter from './User/Aboutus/Newsletter';
import Financials from './User/Aboutus/Financials';
import OurHistory from './User/Aboutus/OurHistory';
import Reviews from './User/Aboutus/Reviews';
import Vision from './User/Aboutus/Vision';
import Bloglist from './User/Blog/Bloglist';
import Blogdetail from './User/Blog/BlogDetail';
import Campaigns from './User/Campaigns/Campaigns';
import Campaigndetail from './User/Campaigns/CampaignDetail';
import Contact from './User/Contactus/Contact';
import Donate from './User/Contribute/Donate';
import Volunteer from './User/Contribute/Volunteer';
import Handin from './User/Contribute/Handin';
import Help from './User/Contribute/Help';
import Upcoming from './User/Eve/Upcoming';
import Past from './User/Eve/Past';
import EveDetails from './User/Eve/EveDetail';
import AdminDash from './Admin/AdminDash';
import BlogDetail from './User/Blog/BlogDetail';

class MainComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            branches: [],
            blogs: [],
            events: [],
            campaigns: [],
            newsletters: [],
            financials: [],
            reviews: []
        }
    }

    componentDidMount() {
        axios.all([
            axios.get('http://localhost:5000/branches'),
            axios.get('http://localhost:5000/blogs'),
            axios.get('http://localhost:5000/events'),
            axios.get('http://localhost:5000/campaigns'),
            axios.get('http://localhost:5000/files/newsletter'),
            axios.get('http://localhost:5000/files/financials'),
            axios.get('http://localhost:5000/files/reviews'),
        ])
        .then(response => {
            this.setState({
                branches: response[0].data,
                blogs: response[1].data,
                events: response[2].data,
                campaigns: response[3].data,
                newsletter: response[4].data,
                reviews: response[5].data
            })

            console.log(this.state);
        });
    }

    

    render(){

        const BlogRoute = ({ match }) => {
            return <BlogDetail blog={this.state.blogs.filter(blog => blog.id == match.params.blogId)[0]}/>
        }

        return (
            <BrowserRouter>
                <div>
                    <Header className="navigation" />
                    {/* {this.state.branches.map(branch => <div>{branch.manager}, {branch.name} </div>)} */}
                    <Switch>
                        <Route exact path="/aboutus/branches" component={() => <Branches branches={this.state.branches} />} />

                        <Route exact path="/blog" component={() => <Bloglist blogs={this.state.blogs} />} />
                        <Route exact path="/blog/:blogId" component={BlogRoute} />

                        <Route exact path="/events/upcoming" component={() => <Upcoming events={this.state.events} />} />
                        <Route exact path="/events/upcoming/evedet" component={EveDetails} />
                        <Route exact path="/events/past" component={Past} />
                        <Route exact path="/events/past" component={() => <Past events={this.state.events} />} />

                        <Route exact path="/aboutus/financials" component={() => <Financials financials={this.state.financials} />} />
                        <Route exact path="/aboutus/history" component={OurHistory} />
                        <Route exact path="/aboutus/newsletters" component={() => <Newsletter letters={this.state.newsletters} />} />
                        <Route exact path="/aboutus/press" component={() => <Reviews reviews={this.state.reviews} /> } />
                        <Route exact path="/aboutus/vision" component={Vision} />

                        <Route exact path="/campaigns" component={() => <Campaigns campaigns={this.state.campaigns} />} />
                        <Route exact path="/campaigns/campaignID" component={Campaigndetail} />

                        <Route exact path="/contactus" component={Contact} />

                        <Route exact path="/contribute/donate" component={() => <Donate handleSunmit={this.handleDonate} />} />
                        <Route exact path="/contribute/volunteer" component={Volunteer} />
                        <Route exact path="/contribute/handin" component={Handin} />
                        <Route exact path="/contribute/help" component={Help} />
                        
                        <Route exact path="/admin" component={AdminDash} />
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}
export default MainComponent
