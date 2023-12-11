import React from 'react'

function PortfolioEducationCard({ed}) {
    const {id, schoolName, location, degree, major, gradYear, additionalInfo, logo} = ed
    return (
        <div className="bg-white border-t border-b px-3 my-2 rounded">

            <div className='flex justify-between items-center border-b'>
                <div>
                    <img
                        src={logo}
                        alt={schoolName}
                        className='h-24'
                    />
                </div>
                <div className='flex-col'>
                    <p className='text-2xl text-right'>{schoolName}</p>
                    <p className='text-right'>{degree}</p>
                    <p className='text-right'>{major}</p>
                    <p className='text-right'>{location}</p>
                    <p className='text-right'>{`Graduated: ${gradYear}`}</p>
                    <p className='text-right'>{additionalInfo}</p>
                </div>
            </div>


        </div>
    )
}

export default PortfolioEducationCard
