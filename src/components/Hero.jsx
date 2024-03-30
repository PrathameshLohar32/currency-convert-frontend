import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Hero.module.css';
import classNames from 'classnames'; // Import classNames library

import React from 'react';

const Hero = ({ scrollToTarget }) => {
  const [bounce, setBounce] = React.useState(false);

  React.useEffect(() => {
    // Set bounce to true after component mounts to trigger animation
    setBounce(true);
  }, []);

  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="\3226113_43058.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div class="col-lg-6">
          <h1 className={classNames("display-5 fw-bold text-body-emphasis lh-1 mb-3", { [styles.bounce]: bounce })}>
            Empower Your Transactions: Convert Currency in a Click!
          </h1>
          <p class="lead">Welcome to our comprehensive currency conversion platform! Seamlessly convert between 182 currencies with real-time rates. Whether you're dealing with USD, INR, or any currency in between, we've got you covered. Join now and experience hassle-free currency conversion at your fingertips.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={scrollToTarget}>Try Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
