import React from 'react'

const Postcard = ({ post }) => {
    const { userId, id, body, title } = post;
    return (
        <>
            <div class="card post-card h-100">
                <div class="card-body">
                    <h5 class="fs-16 fw-500 mb-2">{title.substring(0,20)}...</h5>
                    <p class="fs-14 fw-400 text-muted">{body.substring(0, 150)}...</p>
                </div>
                <div class="card-footer bg-transparent">
                    <small class="text-muted">Post #{id}</small>
                </div>
            </div>
        </>
    )
}

export default Postcard
