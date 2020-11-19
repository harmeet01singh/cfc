import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { BranchList, BranchCreate, BranchEdit } from './Branches';
import { BlogList, BlogCreate, BlogEdit} from './Blogs';
import { EventList, EventCreate, EventEdit} from './Events';
import { CampaignList, CampaignCreate, CampaignEdit} from './Campaigns';
import { NewsletterCreate, NewsletterEdit, NewsletterList} from './Newsletter';
import { FinancialCreate, FinancialEdit, FinancialList} from './Financials';
import { ReviewList} from './Reviews';
import { DonationList} from './Donations';
import { VolunteerList} from './Volunteer';
import { HandinList} from './Handin';
import { HelpList} from './Help';
import { FeedbackList} from './Feedback'; 

const AdminDash = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:5000')}>
            <Resource name='branches' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} />
            <Resource name='events' list={EventList} create={EventCreate} edit={EventEdit} />
            <Resource name='campaigns' list={CampaignList} create={CampaignCreate} edit={CampaignEdit} />
            <Resource name='files/newsletters' list={NewsletterList} create={NewsletterCreate} edit={NewsletterEdit} />
            <Resource name='files/financials' list={FinancialList} create={FinancialCreate} edit={FinancialEdit} />
            <Resource name='files/reviews' list={ReviewList} />
            <Resource name='contribute/donations' list={DonationList} />
            <Resource name='contribute/volunteers' list={VolunteerList} />
            <Resource name='contribute/handins' list={HandinList}/>
            <Resource name='contribute/helps' list={HelpList}/>
            <Resource name='feedbacks' list={FeedbackList}/>
        </Admin>
    )
}

export default AdminDash;
