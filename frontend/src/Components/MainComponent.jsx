import React, {Component} from 'react';
import Header from './User/Header';
import Newsletter from './User/Aboutus/Newsletter';
import Financials from './User/Aboutus/Financials';

class MainComponent extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                {/*<Newsletter/>*/}
                <Financials/>
            </div>
        )
    }
}
export default MainComponent
