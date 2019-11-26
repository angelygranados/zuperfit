import React from 'react';
import '../assets/styles/components/FeaturedSection.scss';

const FeaturedSection = ({children}) =>  (
    <div className="featuredSection">
        {children}
    </div>
    
);

export default FeaturedSection;