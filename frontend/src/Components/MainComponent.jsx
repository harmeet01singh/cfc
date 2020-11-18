import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
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

class MainComponent extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/aboutus/branches" component={Branches} />
                        <Route exact path="/aboutus/financials" component={Financials} />
                        <Route exact path="/aboutus/history" component={OurHistory} />
                        <Route exact path="/aboutus/newsletters" component={Newsletter} />
                        <Route exact path="/aboutus/press" component={Reviews} />
                        <Route exact path="/aboutus/vision" component={Vision} />
                        <Route exact path="/blog" component={Bloglist} />
                        <Route exact path="/campaigns" component={Campaigns} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route exact path="/contribute/donate" component={Donate} />
                        <Route exact path="/contribute/volunteer" component={Volunteer} />
                        <Route exact path="/contribute/handin" component={Handin} />
                        <Route exact path="/contribute/help" component={Help} />
                        <Route exact path="/events/upcoming" component={Upcoming} />
                        <Route exact path="/events/past" component={Past} />
                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default MainComponent
