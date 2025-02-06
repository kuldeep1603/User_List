import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Cardskeleton = () => {
    return (
        <>
            <Skeleton count={5} />
        </>
    )
}

export default Cardskeleton
