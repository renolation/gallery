import React from 'react';
import {getAccessToken, getSession, withPageAuthRequired} from '@auth0/nextjs-auth0';
import ClientComponent from '../client-component';


export default withPageAuthRequired(
  async function Page() {
    const session = await getSession();
    return (
        <main>
            <h1>Profile</h1>
            <h2>Page:</h2>
            <h3>Access Token</h3>
            <pre>{JSON.stringify({accessToken: session?.accessToken}, null, 2)}</pre>
            <h3>User</h3>
            <pre>{JSON.stringify(session?.user, null, 2)}</pre>
            <h2>Client Component:</h2>
            <ClientComponent/>
        </main>
    );
  },
    {returnTo: '/profile'}
);