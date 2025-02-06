import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// component
import Cardskeleton from '../Components/Cardskeleton';
import Postcard from '../Components/Postcard';


// Redux 
import { useSelector, useDispatch } from 'react-redux';
import { FetchUserDeatils } from '../Apis/UserFetch';
import { FetchPost } from '../Apis/PostFetch';
import Sidebar from '../Components/Sidebar';


const SingleUser = () => {
    const { Id } = useParams();
    const dispatch = useDispatch();

    // Fetch user 
    useEffect(() => {
        if (Id) {
            dispatch(FetchUserDeatils(`https://jsonplaceholder.typicode.com/users/${Id}`));
        }
    }, [Id, dispatch]);

    // Fetch posts 
    useEffect(() => {
        if (Id) {
            dispatch(FetchPost(`https://jsonplaceholder.typicode.com/posts?userId=${Id}`));
        }
    }, [Id, dispatch]);

    // redux get data
    const UserDeatils = useSelector((state) => state.userFetch.UserDetails);
    const Posts = useSelector((state) => state.postFetch.posts);
    const Loading = useSelector((state) => state.postFetch.IsLoading);

    // loading state
    if (!UserDeatils) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />

                <div className="col-md-10 bg-light">
                    <div className="p-sm-4 p-2">
                        <div className="user-card rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-sm-8 col-8">
                                    <h2 className='text-ellipsis'>{UserDeatils?.name}</h2>
                                    <p className="text-ellipsis"><i className="fas fa-user-circle me-2"></i>{UserDeatils?.username}</p>
                                    <p className="text-ellipsis"><i className="fas fa-envelope me-2"></i>{UserDeatils?.email}</p>
                                    <p className="text-ellipsis"><i className="fas fa-phone me-2"></i>{UserDeatils?.phone}</p>
                                    <p className="text-ellipsis"><i className="fas fa-globe me-2"></i>{UserDeatils?.website}</p>
                                </div>
                                <div className="col-sm-4 col-4">
                                    <div className="text-end">
                                        <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className="rounded-circle profile-image" alt="Profile Picture" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <div className="card stat-card">
                                    <div className="card-body">
                                        <h5 className="fw-500 fs-18">Total Posts</h5>
                                        <h6 className="fw-400 fs-14">{Posts.length}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card stat-card">
                                    <div className="card-body">
                                        <h5 className="fw-500 fs-18">Company</h5>
                                        <h6 className="fw-400 fs-14">{UserDeatils?.company?.name}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card stat-card">
                                    <div className="card-body">
                                        <h5 className="fw-500 fs-18">Location</h5>
                                        <h6 className="fw-400 fs-14">{UserDeatils?.address?.street}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Post Section */}
                        <div className="row">
                            <div className="col-12">
                                <h3 className="fs-20 fw-600">Recent Posts</h3>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    {
                                        Loading ? (
                                            [...Array(20)].map((_, index) => (
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-4" key={index}>
                                                    <Cardskeleton />
                                                </div>
                                            ))
                                        ) : Posts.length === 0 ? (
                                            <>
                                                <div className="col-12 text-center">
                                                    <h4>No posts found.</h4>
                                                </div>
                                            </>
                                        ) : (
                                            Posts.map((post, index) => (
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-4" key={index}>
                                                    <Postcard post={post} />
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
