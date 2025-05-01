//Bạn đang định nghĩa bộ định tuyến (router) trong React — để điều hướng các trang
import React from "react"; //React: để viết component.
import { Routes, Route, Navigate } from 'react-router-dom'
//Routes: container bao hết các Route.

//Navigate: để chuyển hướng (redirect).

import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Thankyou from "../pages/Thankyou";

const Routers = () => {
    return (
        //Đây là một functional component tên Routers.
        //Nó trả về các Route nằm trong Routes để điều hướng.

        //Khi vào / thì tự động chuyển hướng (redirect) đến /home
        //:id là tham số động (dynamic param) → dùng để lấy id trên URL.
        <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<Thankyou />} />
            <Route path="/tours/search" element={<SearchResultList />} />
        </Routes>
    )
}

export default Routers

//Navigate: Không cần phải bấm vào nút hoặc link.