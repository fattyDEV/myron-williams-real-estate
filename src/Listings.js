import React, { Component } from 'react';
import Header from './Header.js';
import Menu from './Menu.js';

class Listings extends Component {
    render() {
        return (
            <div className='listings-container'>
                <div className='top-header'>
                    <Header />
                    <Menu />
                    <img className='background-pic' src='https://images.pexels.com/photos/462358/pexels-photo-462358.jpeg?cs=srgb&dl=garden-house-lawn-462358.jpg&fm=jpg' alt='house pic' />
                </div>
                <div className='zillow-large-search-box-widget-container'>
                    <h2>Find Homes</h2>
                    <div>
                        <a href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer"><img alt="Zillow Real Estate Information" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=%2Fstatic%2Fimages%2Fpowered-by-zillow.gif"></img></a>
                    </div>

                    <iframe 
                        title='zillow search box' 
                        className='iframe' 
                        src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=Monroe+NC&shvi=yes"
                    ></iframe>
                    
                    <table className="zillow-tnc-widget-footer-links">
                        <tbody>
                            <tr>
                                <td className='quick-links'>QUICK LINKS:</td>
                            </tr>
                            <tr>
                                <td className='info'>
                                    <span id="widgetFooterLink" className="regionBasedLink">
                                        <a href="https://www.zillow.com/monroe-nc/" target="_blank" rel="noopener noreferrer"><span className="region">Monroe</span>Real Estate Listing</a>
                                    </span>
                                </td>
                                <td className='info'>
                                    <span id="widgetFooterLink" className='rates'>
                                        <a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="noopener noreferrer">Mortgage Rates</a>
                                    </span>
                                </td>
                                <td className='info'>
                                    <span id="widgetFooterLink" className='rates'>
                                        <a href="https://www.zillow.com/refinance/" target="_blank" rel="noopener noreferrer">Refinancing</a>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='info'>
                                    <span id="widgetFooterLink" className="regionBasedLink">
                                        <a href="https://www.zillow.com/monroe-nc/foreclosures/" target="_blank" rel="noopener noreferrer"><span className="region">Monroe</span>Foreclosures</a>
                                    </span>
                                </td>
                                <td className='info'>
                                    <span id="widgetFooterLink" className='rates'>
                                        <a href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="noopener noreferrer">Mortgage Calculators</a>
                                    </span>
                                </td>
                                <td className='info'>
                                    <span id="widgetFooterLink" className='rates'>
                                        <a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="noopener noreferrer">Purchase Loans</a>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Listings;