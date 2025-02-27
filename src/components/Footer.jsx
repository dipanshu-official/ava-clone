import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#141414]">
            <div className="py-5 md:py-10 lg:py-20 px-5 md:px-10 lg:pl-30 lg:pr-[242px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-5 md:gap-10 lg:gap-20">
                    <div>
                        <h1 className="font-medium text-2xl md:text-3xl lg:text-2xl">Features</h1>
                        <div className="mt-2 md:mt-4 lg:mt-5 text-lg lg:text-[16px] space-y-2 font-normal text-[#D6D6D6]">
                            <p>Facebook Ads</p>
                            <p>Landing Page Tool</p>
                            <p>Google Ads</p>
                            <p>Cover Letter</p>
                            <p>Product Description Generators</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium text-2xl md:text-3xl lg:text-2xl">Resources</h1>
                        <div className="mt-2 md:mt-4 lg:mt-5 text-lg lg:text-[16px] font-normal space-y-2 text-[#D6D6D6]">
                            <p>Guides and Tutorials</p>
                            <p>Blogs</p>
                            <p>Join the Community</p>
                            <p>Roadmap</p>
                            <p>Feedback</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium text-2xl md:text-3xl lg:text-2xl">Comparison</h1>
                        <div className="mt-2 md:mt-4 lg:mt-5 text-lg lg:text-[16px] font-normal space-y-2 text-[#D6D6D6]">
                            <p>Jasper</p>
                            <p>Copy.AI</p>
                            <p>Writesonic</p>
                            <p>Rytr</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium text-2xl md:text-3xl lg:text-2xl">Company</h1>
                        <div className="mt-2 md:mt-4 lg:mt-5 text-lg lg:text-[16px] font-normal space-y-2 text-[#D6D6D6]">
                            <p>About us</p>
                            <p>Customer’s love</p>
                            <p>Contact us</p>
                            <p>Affiliate Program</p>
                            <p>Careers</p>
                            <p>Pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
