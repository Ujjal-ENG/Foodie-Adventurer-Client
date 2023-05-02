/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUtensils } from 'react-icons/fa';

function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2">About Us</h1>
                <p className="text-lg">
                    Foodie Adventurer is a restaurant that serves delicious food from around the world. Our goal is to provide our customers with a unique and unforgettable dining experience.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                    <FaUtensils className="text-5xl mb-4" />
                    <h2 className="text-lg font-bold mb-2">Our Food</h2>
                    <p className="text-md text-center">
                        We use only the freshest and highest quality ingredients to create our dishes. Our menu offers a wide variety of dishes from all around the world.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <FaMapMarkerAlt className="text-5xl mb-4" />
                    <h2 className="text-lg font-bold mb-2">Our Location</h2>
                    <p className="text-md text-center">
                        We are located in the heart of downtown, just a few blocks from the waterfront. Our restaurant is easily accessible by car, bike, or public transportation.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <FaPhone className="text-5xl mb-4" />
                    <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                    <p className="text-md text-center">Give us a call to make a reservation or to ask any questions you may have. We look forward to hearing from you!</p>
                    <a href="tel:123-456-7890" className="text-md font-bold mt-2">
                        123-456-7890
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <FaEnvelope className="text-5xl mb-4" />
                    <h2 className="text-lg font-bold mb-2">Email Us</h2>
                    <p className="text-md text-center">If you have any questions or comments, feel free to send us an email. We would love to hear from you!</p>
                    <a href="mailto:info@foodieadventurer.com" className="text-md font-bold mt-2">
                        info@foodieadventurer.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
