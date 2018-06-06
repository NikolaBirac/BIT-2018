import React from 'react';
import jsTimeAgo from 'javascript-time-ago';
import TimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';

jsTimeAgo.locale(en);

const LastUpdate = ({date})=> {
    return (
        <div id="lastUpdate">
          Last update:
          <TimeAgo>{date}</TimeAgo>
        </div>
      )
}

export default LastUpdate;