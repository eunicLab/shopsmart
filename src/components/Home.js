import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../App.css';
import phoneScreenShot from '../images/phoneScreenShot.webp';
import iShopSmartLogo from '../images/IShopSmart-logo.png';
import googleBadge from '../images/google-play-badge.png';
import LoginPage from './LoginPage';
import MyLists from './MyLists';
import PrivacyPolicy from './PrivacyPolicy';

let Home = () => {
  const features = useMemo(()=> [
    'Easy to use shopping list app',
    'Make and manage unlimited lists',
    'Set a Budget to manage spending',
    'Get your list on any device',
    'Available on Google Play store',
    'Web version also available',
    'Shopping is fun with IShopSmart',
  ], []);
  const [feature, setFeature] = useState(features[0]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % features.length;
      setFeature(features[count]);
    }, 3000); // Adjusted to 3000ms for better readability
    return () => clearInterval(interval);
  }, [features]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Login' component={LoginPage} />
        <Route path='/MyLists' exact component={MyLists} />
        <Route path='/PrivacyPolicy' exact component={PrivacyPolicy} />
        <Route path='/'>
          <div className='homeFullBackground'>
            <div className='homeNavigation'>
              <span className='navHomeText'>IShopSmart</span>
              <Link to='/Login' className='navHomeText2'>
                <span>Login/SignUp</span>
              </Link>
            </div>
            <div className='homeBackground'>
              <div className='ishopsmartText'>ISHOPSMART</div>
              <div className='secondaryTextHome'>List. Buy. Check</div>
            </div>
            <div className='HomeSection2'>
              <img src={phoneScreenShot} alt='phone' className='phoneImage' />
              <span className='textBoard'>{feature}</span>
            </div>
            <div className='HomeSection3'>
              <img
                src={iShopSmartLogo}
                className='iShopSmartLogo'
                alt='logo for ishopsmart'
              />
              <a href='https://play.google.com/store/apps/details?id=com.euniclab.ishopsmart'>
                <img
                  src={googleBadge}
                  className='googleBadge'
                  alt='google badge'
                />
              </a>
              <Link to='/MyLists' className='webBadge'>
                <div className='webBadge'>Use Web Version</div>
              </Link>
            </div>
            <div className='footer'>
              <a className='footerContactUs' href='mailto:eunicLab.co@gmail.com'>
                Contact us
              </a>
              <span className='footerDesigner'>
                Powered By <a href='https://github.com/eunicLab'>eunicLab</a>
              </span>
              <Link to='/PrivacyPolicy' className='footerPrivacyPolicy'>
                Privacy Policy
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Home;
