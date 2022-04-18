import React from 'react';
import useServices from '../../hooks/useServices';
import Card from './Card/Card';
import './Service.css';


const Service = () => {
    const [services] = useServices();

    return (
      <div className='service-container'>
        <div className="service-text">
          <h1>Heart Care based Solutions</h1>
          <p>
            We merge two services consulting and brilliant client Services for
            the patient healthcare. <br /> Used latest technology in hospital.
          </p>
        </div>
        <div className="card-container">
          {services.map((service) => (
            <Card key={service.id} service={service}></Card>
          ))}
        </div>
      </div>
    );
};

export default Service;