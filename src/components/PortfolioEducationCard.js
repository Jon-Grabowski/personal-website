import React from 'react'

function PortfolioEducationCard({ed}) {
    const {id, schoolName, location, degree, major, gradYear, additionalInfo, logo} = ed
    return (
        <div className="bg-white border border-black my-2 rounded">
            <p className='text-3xl text-center mb-4 bg-gray-900 text-white py-1 rounded-t'>{schoolName}</p>
            <div className='flex justify-between items-center border-b mb-1 pb-1 px-3'>
                
                <div className='align-center text-center'>
                    <img
                        src={logo}
                        alt={schoolName}
                        className='h-24'
                    />
                </div>
                <div className='flex-col'>
                    
                    <p className='text-right'>{degree}</p>
                    <p className='text-right'>{major}</p>
                    <p className='text-right'>{location}</p>
                    <p className='text-right'>{`Graduated: ${gradYear}`}</p>
                    
                </div>
            </div>
            <p className='text-center pb-2'>{additionalInfo}</p>

        </div>
    )
}

export default PortfolioEducationCard
