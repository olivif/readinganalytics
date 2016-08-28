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

function Home({ readItems }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Read items</h1>
        <ul className={s.readItems}>
          {readItems.map((item, index) => (
            <li key={index} className={s.readItem}>
              <a href={item.link} className={s.readItemTitle}>{item.title}</a>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  readItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired,
};

export default withStyles(Home, s);
