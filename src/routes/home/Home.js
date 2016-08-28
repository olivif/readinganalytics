/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

function Home({ pocket }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Pocket items</h1>
        <ul className={s.pocket}>
          {pocket.map((item, index) => (
            <li key={index} className={s.pocketItem}>
              <a href={item.link} className={s.pocketTitle}>{item.title}</a>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  pocket: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired,
};

export default withStyles(Home, s);
