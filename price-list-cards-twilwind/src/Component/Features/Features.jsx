import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex text-center'>
             < CheckCircleIcon class="h-4 w-4 text-purple-600" />
           <span className='ml-3 pl-4'>{feature}</span> 
        </div>
    );
};

export default Features;