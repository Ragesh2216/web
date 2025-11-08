import React, {  useState } from "react";
import { Link } from "react-router-dom";


export default function Service() {
 
  const services = [
    {
      title: "Advertising & Brand Partnerships",
      icon: "fa-bullhorn", // Replace with an actual icon component or image
      description: "Connect your brand with our highly engaged and influential readership. We offer bespoke native content creation, sponsored sections, and high-impact digital advertising across our platforms.",
      detailsLink: "/advertise",
      buttonText: "View Media Kit"
    },
    {
      title: "Content Licensing & Syndication",
      icon: "fa-sitemap",
      description: "License our world-class, award-winning journalism for use on your corporate website, internal newsletters, or in educational materials. Access our archives and new content feeds.",
      detailsLink: "/licensing",
      buttonText: "Inquire About Licensing"
    },
    {
      title: "Custom Research & Data Services",
      icon: "fa-chart-line",
      description: "Leverage our proprietary survey data, investigative resources, and expert analysts for in-depth reports tailored to your industry. Ideal for financial firms and policymakers.",
      detailsLink: "/data-services",
      buttonText: "Request a Consultation"
    },
    {
      title: "Events, Webinars & Speaking",
      icon: "fa-calendar-alt",
      description: "Sponsor or co-host major industry conferences, executive briefings, or webinars. Our journalists are available for keynote speaking engagements and expert panels.",
      detailsLink: "/events",
      buttonText: "Explore Opportunities"
    },
  ];

  return (
     <div className="service">
    
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={`fas ${service.icon} service-icon`}></i>
            <h2 className="card-title">{service.title}</h2>
            <p className="card-description">{service.description}</p>
            <a href={service.detailsLink} className="card-button">
              {service.buttonText}
            </a>
          </div>
        ))}
      </div>

      <section className="cta-section">
        <h2>Ready to Partner?</h2>
        <p>If you have a unique request or need, contact our business development team directly.</p>
        <a href="/contact-business" className="primary-cta-button">Contact Business Inquiries</a>
      </section>
    </div>
  
  );
};