/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
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
                <div>
                    <span className="footer-title">Cuisines</span>
                    <a className="link link-hover">Indian</a>
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
                            <span className="label-text">Subscribe to our newsletter</span>
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
