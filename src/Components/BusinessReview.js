import React from 'react'
import './BusinessReview.css'

function BusinessReview({active}) {
    return (
        <div className='business-review' style={active==='review'? {display:'flex'} : {display: 'none'}} >
            <div className='review-left'>

            </div>
            <div className='review-right'>
                <div className='review-top'>

                </div>
                <div className='review-bottom'>

                </div>
            </div>
        </div>
    )
}

export default BusinessReview
