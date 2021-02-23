import React from 'react'
import {useSelector} from "react-redux";
// import classes from './FeaturesSection.module.sass'

const FeaturesSection = props => {

  const featuresInfo = useSelector((state) => state.featureReducer.info)

  return (
    <section className="features-section">
      <div className="container-fluid">
        <div className="row">

          {featuresInfo.map((feature, index) => {
            return (
              <div className="col-md-4 p-0 feature" key={index}>
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature.img} alt="#" />
                  </div>
                  <h2>{feature.text}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;