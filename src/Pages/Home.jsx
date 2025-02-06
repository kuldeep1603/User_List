import React, { useEffect } from 'react';

// Components 
import Navbar from '../Components/Navbar';
import Usercards from '../Components/Usercards';
import Cardskeleton from '../Components/Cardskeleton';

// router 
import { Link } from 'react-router';

// Redux  
import { FetchUser, SetUserSearch } from '../Apis/UserFetch';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../Components/Sidebar';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const delayfunction = setTimeout(() => {
            dispatch(FetchUser(`https://jsonplaceholder.typicode.com/users`));
        }, 500);

        return () => clearTimeout(delayfunction);
    }, [dispatch]);

    // Redux get data 
    const UserList = useSelector((state) => state.userFetch.User);
    const Loading = useSelector((state) => state.userFetch.IsLoading);
    const search_value = useSelector((state) => state.userFetch.UserSearch);

    // HandleSearch
    const HandleSearch = (value) => {
        dispatch(SetUserSearch(value));
    };

    // Filter users based on search input
    const filteredUsers = UserList.filter((user) =>
        user.name.toLowerCase().includes(search_value.toLowerCase())
    );

    return (
        <div>
            {/* <Navbar /> */}
            <section className=''>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />

                        <div className="col-md-10 bg-light p-sm-4 p-3">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className='primary-color fw-700'>Kuldeep Mourya</h2>
                                    <p className='text-muted fs-16'>Welcome to the Support Qrkey.</p>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        value={search_value}
                                        onChange={(e) => HandleSearch(e.target.value)}
                                        placeholder='Search user ..!'
                                        autoFocus
                                        className='form-control py-2 px-4'
                                    />
                                </div>
                            </div>

                            <div className="row mt-4">

                                {Loading ? (
                                    [...Array(20)].map((_, index) => (
                                        <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-4" key={index}>
                                            <Cardskeleton />
                                        </div>
                                    ))
                                ) : filteredUsers.length === 0 ? (
                                    <>
                                        <div className="col-12 text-center">
                                            <h4>No users found</h4>
                                            <p>Please try searching again.</p>
                                        </div>
                                    </>
                                ) : (
                                    filteredUsers.map((e, index) => (
                                        <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-4" key={index}>
                                            <Link to={`/user/${e.id}`}>
                                                <Usercards user={e} />
                                            </Link>
                                        </div>
                                    ))
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
