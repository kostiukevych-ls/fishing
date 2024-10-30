import React from "react";
import ProcessedHTML from '../component/processed-html.jsx';
import Nav from '../component/nav.jsx';

/**
 * LandingPage renders "landing_page" resources.
 *
 * @param fields
 *   The landing page fields.
 */
const LandingPage = ({ fields }) => {
  // Extract the required fields from the resource fields.
  const { title, hero, mainMenu } = fields;
  return (
    <div id="landing-page">
      <header className="header">
        <div className="header-content container">
          <div className="navigation">
            <ul className="menu">
              {mainMenu.data.items.map(({ href, title }, i) => (
                <li key={i}><a href={ href }>{ title }</a></li>
              ))}
            </ul>
          </div>
          <div className="actions">
            <a href="#" className="btn-primary">Edit Page</a>
          </div>
        </div>
      </header>
      <div className="main-content">
        <div className="banner container">
          <h1 className="title">{ title }</h1>
          <div className="description">
            <ProcessedHTML html={hero} />
          </div>
        </div>
        <div className="background-image-section">
          <div className="container">
            <div className="text-wrapper">
              <h2 className="content-title">Dive Deeper</h2>
              <div className="content-description">This introductory application
                explains and demonstrates a few of Applura's features and
                quickly describes how to use them.
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card-icon book"></div>
                <div className="card-content">
                  <div className="card-title">Find More Ways to Manage Your
                    Content
                  </div>
                  <div className="card-description">
                    Follow the menu links above to learn more about managing
                    content or how to build your JavaScript front-end
                    application.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-icon notice"></div>
                <div className="card-content">
                  <div className="card-title">Edit This Page or Switch to Your
                    Favorite JavaScript Library
                  </div>
                  <div className="card-description">
                    Edit these pages and tweak this default front end's styling.
                    If you're familiar with a different JavaScript library, such
                    as Vue or Svelte, you can easily swap this introductory
                    front end out with one that is more familiar to you.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-icon terminal"></div>
                <div className="card-content">
                  <div className="card-title">Customize Your Front End</div>
                  <div className="card-description">
                    When you've found your bearings, replace this front-end
                    application with one you've built yourself and customize the
                    content model to your specific needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
