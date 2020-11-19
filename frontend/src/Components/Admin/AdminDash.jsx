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

const AdminDash = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:5000')}>
            <Resource name='branches' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} />
            <Resource name='events' list={EventList} create={EventCreate} edit={EventEdit} />
            <Resource name='campaigns' list={CampaignList} create={CampaignCreate} edit={CampaignEdit} />
            <Resource name='newsletter' list={NewsletterList} create={NewsletterCreate} edit={NewsletterEdit} />
            <Resource name='financials' list={FinancialList} create={FinancialCreate} edit={FinancialEdit} />
            <Resource name='reviews' list={ReviewList} />
            {/*<Resource name='donations' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='volunteer' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='handin' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='help' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='feedback' list={BranchList} create={BranchCreate} edit={BranchEdit} />*/}
        </Admin>
    )
}

export default AdminDash;
