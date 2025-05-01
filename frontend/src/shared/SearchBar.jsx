// useRef là một Hook trong React.
// Nó cho phép bạn lưu trữ một giá trị hoặc trỏ tới một DOM element mà không làm component bị render lại.
// import React, { useRef } from "react";
import React, { useRef } from 'react';
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert("Tất cả các trường phải được nhập!!!");
        }
    }

    return <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex form__group form__group-fast gap-3">
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        {/* Dùng ref giúp code nhanh gọn trong các trường hợp form đơn giản như tìm kiếm, đăng nhập, lọc dữ liệu... */}
                        <input type="text" placeholder="Where are you going?" ref={locationRef} />
                    </div>
                </FormGroup>

                <FormGroup className="d-flex form__group form__group-fast gap-3">
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        {/* Dùng ref giúp code nhanh gọn trong các trường hợp form đơn giản như tìm kiếm, đăng nhập, lọc dữ liệu... */}
                        <input type="number" placeholder="Distance k/m" ref={distanceRef} />
                    </div>
                </FormGroup>

                <FormGroup className="d-flex form__group form__group-last gap-3">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max people</h6>
                        {/* Dùng ref giúp code nhanh gọn trong các trường hợp form đơn giản như tìm kiếm, đăng nhập, lọc dữ liệu... */}
                        <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col >
}

export default SearchBar