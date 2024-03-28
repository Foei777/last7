import React from 'react'
import "./Header.css"
import {Link}  from "react-router-dom";

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#page-top">ยินดีต้อนรับ</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="about">เลือกวันจอง</a></li>
                <li class="nav-item"><a class="nav-link" href="projects">ประเภทห้องพัก</a></li>
                <li class="nav-item"><a class="nav-link" href="contrac">ติดต่อ</a></li>
            </ul>
        </div>
    </div>
    </nav>
    <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Smile Lockers</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">Value solves the price you pay.</h2>
              <Link to="about">
              <a className="btn btn-primary" href="about">เข้าสู่หน้าการจอง</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
