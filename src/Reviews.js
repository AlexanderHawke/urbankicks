import React from "react";

const Reviews = () => {
    // Fake reviews data
    const fakeReviews = [
        {
            id: 1,
            name: "John Doe",
            review: "Great store! I love it!",
            rating: 5
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "The quality is amazing. Highly recommended!",
            rating: 4
        },
        {
            id: 3,
            name: "Bob Johnson",
            review: "Good value for money.",
            rating: 3
        },
        {
            id: 4,
            name: "Sam Bobbertson",
            review: "Love my shoes from Urban Kicks!",
            rating: 5
        },
        {
            id: 5,
            name: "David Einstein",
            review: "Great shoes, great style.",
            rating: 4
        },
        {
            id: 6,
            name: "Blake Young",
            review: "Awesome time with customer support.",
            rating: 4
        },
        {
            id: 7,
            name: "James Wright",
            review: "Shoes have never felt this comfy.",
            rating: 5
        },
    ];

    return (
        <>
        <h2 className="checkout-title">Customer Reviews</h2>
        <p className="reviews-description">If you don't trust us, that's okay! Hear it from our previous customers!</p>
        <br/>
        <hr/>
        <div className="reviews">
            {fakeReviews.map((review) => (
                <div key={review.id} className="review">
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                    <div>
                        {Array.from({ length: review.rating }).map((_, index) => (
                            <span key={index}>⭐</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Reviews;