/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 md:justify-around justify-center items-center md:items-start flex flex-col md:flex-row ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Online Ordering</a>
                    <a className="link link-hover">Reservation</a>
                    <a className="link link-hover">Catering</a>
                    <a className="link link-hover">Takeout</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press Kit</a>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <span className="footer-title">Most Popular Cuisines States in India</span>
                    <a href="https://www.cnn.com/travel/article/indian-food-dishes/index.html" target="_blank" className="link link-hover" rel="noreferrer">
                        Goa: Fish Recheado, Prawn Balchao, Pork Vindaloo, Bebinca
                    </a>
                    <a href="https://www.cnn.com/travel/article/indian-food-dishes/index.html" target="_blank" className="link link-hover" rel="noreferrer">
                        West Bengal: Fish curry, Luchi, Kosha Mangsho, Mishti Doi
                    </a>
                    <a href="https://www.cnn.com/travel/article/indian-food-dishes/index.html" target="_blank" className="link link-hover" rel="noreferrer">
                        Gujarat: Dhokla, Khandvi, Thepla, Undhiyu
                    </a>
                    <a href="https://www.cnn.com/travel/article/indian-food-dishes/index.html" target="_blank" className="link link-hover" rel="noreferrer">
                        Maharashtra: Vada Pav, Pav Bhaji, Misal Pav, Puran Poli
                    </a>
                    <a href="https://letstripdesi.com/blog/national-food-of-india/" target="_blank" className="link link-hover" rel="noreferrer">
                        Sikkim: Momos, Thukpa, Gundruk, Phagshapa and Seal Roti
                    </a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-red-500 font-bold">Get new food notifications by subscribing to our Foodie Adventurer</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button type="button" className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
