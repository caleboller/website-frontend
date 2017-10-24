import * as React from 'react';
import './header.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import FacebookIcon from '../../components/facebook-icon/facebook-icon';
import SlackIcon from '../../components/slack-icon/slack-icon';
import TwitterIcon from '../../components/twitter-icon/twitter-icon';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="header d-flex">
          <div className="col-md-2">
            <div className="logo">
              <a href="/"><PvdGeeksLogo /></a>
            </div>
          </div>

          <div className="social-container col-md-8 offset-md-2 d-flex justify-content-end align-items-center">
            <ul className="social list-inline d-flex">
              <li><a className="facebook-link" href="https://www.facebook.com/providencegeeks/" title="Like Us" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a></li>
              <li><a className="slack-link" href="http://providencegeeks.slack.com/" title="Join Us" target="_blank" rel="noopener noreferrer"><SlackIcon /></a></li>
              <li><a className="twitter-link" href="https://twitter.com/providencegeeks" title="Follow Us" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}