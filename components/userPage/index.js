import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";
import User from "./user";
import { Button } from "react-bootstrap";

function UsersPage() {
    const [usersData, setUsersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const getUsersData = () => {
        setIsLoading(true);

        axios
            .get(`https://reqres.in/api/users?page=${currentPage}`)
            .then(function (res) {
                setUsersData(res.data.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                setIsLoading(false);

                if (error?.response?.status === 400) {
                    alert(error.response?.data?.error);
                } else {
                    alert(error.message);
                }
            });
    };

    useEffect(() => {
        getUsersData();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <section className="user-list my-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>User List</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                            quae dolore dolores doloribus tempore velit excepturi
                            exercitationem!
                        </p>
                    </div>
                    <div className="col">
                        {isLoading ? (
                            // Display loader while data is being fetched
                            <ContentLoader
                                speed={1}
                                width={400}
                                height={160}
                                viewBox="0 0 400 160"
                                backgroundColor="#d9d9d9"
                                foregroundColor="#ededed"
                                // {...props}
                            >
                                <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
                                <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
                                <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
                                <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
                                <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
                                <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
                            </ContentLoader>
                        ) : (
                            // Display user data
                            <>
                                <div className="candidate-list">
                                    {usersData.map((userData) => (
                                        <User key={userData.id} data={userData} />
                                    ))}
                                </div>
                                <div className="pagination">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                   
                                     <div>Page {currentPage}</div> 
                                    
                                    <button onClick={() => handlePageChange(currentPage + 1)}>
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UsersPage;
