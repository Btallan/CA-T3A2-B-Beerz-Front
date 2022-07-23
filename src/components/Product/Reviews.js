import { useGlobalState } from '../../utils/stateContext';
import {Link} from 'react-router-dom'

import Review from './Review'

const Reviews = ({product}) => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {reviewList, loggedInUser} = store

    // console.log(reviewList)
    // console.log(product.id)

    const productReviews = reviewList.filter(reviews => parseInt(reviews.productID) === parseInt(product.id))
    // console.log(productReviews)

    // FUnction to return the overall rating
    const getOverallRating = (productReviews) => {
        var overall = 0
        const numberReviews = productReviews.length
        productReviews.map(review =>
            overall += review.rating
        )

        if(overall === 0){
            return <p>Product has not yet been reviewed</p>
        } else {
            return overall / numberReviews
        }
    }
    
    return (
        <>
            <h4>Reviews</h4>
            <p>Overall Rating: {getOverallRating(productReviews)}</p>
            {loggedInUser && <Link to={`/add-review/${product.id}`}>Add a review!</Link>}
            <hr></hr>
            {productReviews.map(review =>
                <Review key={review.id} review={review} />    
            )}
        </>
    )
}


export default Reviews;