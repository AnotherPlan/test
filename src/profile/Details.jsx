import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;
    return (
        <div>
            <h1>My Profile</h1>
            <p>
                <strong>Email: </strong> {user.email}<br />
                <strong>Level: </strong> {user.level}<br />
                <strong>Mycode: </strong> {user.usercode}<br />
                <strong>spot_btc: </strong> {user.spot.btc}<br />
                <strong>spot_eth: </strong> {user.spot.eth}<br />
                <strong>spot_xrp: </strong> {user.spot.xrp}<br />
                <strong>spot_trx: </strong> {user.spot.trx}<br />
                <strong>spot_usdt: </strong> {user.spot.usdt}<br />
                <strong>future_usdt: </strong> {user.future.usdt}<br />
                <br />
            </p>
            <p><Link to={`${path}/update`}>Update Profile</Link></p>
        </div>
    );
}

export { Details };