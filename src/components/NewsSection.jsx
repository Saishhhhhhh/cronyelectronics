import React from 'react';
import { cronyData } from '../data/cronyData';

export default function NewsSection() {
  return (
    <section className="gap" id="news">
      <div className="container">
        <div className="heading">
          <span>Technical Whitepapers & Insights</span>
          <h2>Energy Engineering Knowledge Center</h2>
        </div>

        <div className="row">
          {cronyData.articles.map((art) => (
            <div key={art.id} className="col-lg-4 col-md-6 mb-4">
              <div className="blog" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="blog-img">
                    <figure>
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                      />
                    </figure>
                    <div className="admin">
                      <img 
                        src={art.authorAvatar || '/assets/img/works/author_avatar.jpg'} 
                        alt={art.author} 
                        style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <h5>{art.date}</h5>
                        <h6>By {art.author}</h6>
                      </div>
                    </div>
                  </div>
                  <h4 style={{ marginTop: '20px' }}>
                    <a href="#services">{art.title}</a>
                  </h4>
                  <p style={{ fontSize: '15px', color: '#666', marginTop: '10px' }}>
                    {art.desc}
                  </p>
                </div>
                <div>
                  <a href="#services"><i className="flaticon-right-up"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
