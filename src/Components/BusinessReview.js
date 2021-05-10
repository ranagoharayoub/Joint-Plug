import React, {useState} from 'react'
import './BusinessReview.css'
import StarRatings from 'react-star-ratings';

function BusinessReview({active}) {
    const[qualityRating, setQualityRating] = useState(0)
    const[priceRating, setPriceRating] = useState(0)
    const[knowledgeRating, setKnowledgeRating] = useState(0)
    const[speedRating, setSpeedRating] = useState(0)
    const[budRating, setBudRating] = useState(0)


    return (
        <div className='business-review' style={active==='review'? {display:'flex'} : {display: 'none'}} >
            <div className='review-left'>

            </div>
            <div className='review-right'>
                <div className='review-top'>
                    <h2>Write a review.</h2>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="quality">
                            <h4>Quality {qualityRating}</h4>
                            <StarRatings
                                rating={qualityRating}
                                starRatedColor="orange"
                                changeRating={r => setQualityRating(r)}
                                numberOfStars={5}
                                starDimension={"30px"}
                                starSpacing={"2px"}
                                name='qualityRating'
                                starHoverColor={"orange"}
                            />
                        </div>
                        <div className="price">
                            <h4>priceRating {priceRating}</h4>
                            <StarRatings
                                rating={priceRating}
                                starRatedColor="orange"
                                changeRating={r => setPriceRating(r)}
                                numberOfStars={5}
                                starDimension={"30px"}
                                starSpacing={"2px"}
                                name='priceRating'
                                starHoverColor={"orange"}
                            />
                        </div>
                        <div className="knowledge">
                            <h4>knowledgeRating {knowledgeRating}</h4>
                            <StarRatings
                                rating={knowledgeRating}
                                starRatedColor="orange"
                                changeRating={r => setKnowledgeRating(r)}
                                numberOfStars={5}
                                starDimension={"30px"}
                                starSpacing={"2px"}
                                name='knowledgeRating'
                                starHoverColor={"orange"}
                            />
                        </div>
                        <div className="speed">
                            <h4>speed {speedRating}</h4>
                            <StarRatings
                                rating={speedRating}
                                starRatedColor="orange"
                                changeRating={r => setSpeedRating(r)}
                                numberOfStars={5}
                                starDimension={"30px"}
                                starSpacing={"2px"}
                                name='speedRating'
                                starHoverColor={"orange"}
                            />
                        </div>

                        <div className="bud">
                            <h4>Bud Drivers {budRating}</h4>
                            <StarRatings
                                rating={budRating}
                                starRatedColor="orange"
                                changeRating={r => setBudRating(r)}
                                numberOfStars={5}
                                starDimension={"30px"}
                                starSpacing={"2px"}
                                name='budRating'
                                starHoverColor={"orange"}
                            />
                        </div>

                    </div>
                </div>
                <div className='review-bottom'>

                </div>
            </div>
        </div>
    )
}

export default BusinessReview
