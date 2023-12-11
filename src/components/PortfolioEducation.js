import React from 'react'
import { education } from '../siteData'
import PortfolioEducationCard from './PortfolioEducationCard'

function PortfolioEducation() {

    const edCards = education.map(ed => {
        return <PortfolioEducationCard key={ed.id} ed={ed}/>
    })
    return (
        <div>
            {edCards}
        </div>
    )
}

export default PortfolioEducation
