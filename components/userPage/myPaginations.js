import { current } from '@reduxjs/toolkit';
import React from 'react'
import { Pagination} from 'react-bootstrap/Pagination';

function myPaginations(props) {
    const {totalPages,currentPage,getusersData}=props

    const handleClick = (page) => {
         getusersData({ page });
    };

    let items=[];
    for(let number=1; number<=totalPages;number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handleClick(number)}
            >
                
            </Pagination.Item>
        )
        
        
    }

    return <Pagination>{items}</Pagination>;

}

export default myPaginations;