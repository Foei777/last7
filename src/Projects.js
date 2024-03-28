import React from 'react'
//import axios from 'axios';
import "./Project.css";
import { Link } from 'react-router-dom';

function Projects() {


    const handlejong = (number, price) => {
        // เก็บค่าลงใน localStorage
        localStorage.setItem('roomNumber', number);
        localStorage.setItem('roomPrice', price.toString());
    
        // แสดงข้อมูลที่เก็บไว้ใน localStorage
        console.log('Room Number:', number);
        console.log('Room Price:', price);
      };

  return (
    
    <>        <section class="projects-section bg-light" id="projects">
    <div class="container px-4 px-lg-5">

        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww" alt="..." /></div>
            <div class="col-xl-4 col-lg-5">
        <div class="featured-text text-center text-lg-left">
          <h4>แนวห้องที่1 </h4>
          <p class="text-black-100 mb-0">ราคา 500฿/คืน</p>
          <p class="text-black-100 mb-0">หมายเลขห้องที่ 101 </p>
          <Link to="/Arrs">
                  <button onClick={() => handlejong('101', 500)}>จองห้องที่1</button>
            </Link>
        </div>
      </div>
        </div>


        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6"><img class="img-fluid" src=" https://cf.bstatic.com/xdata/images/hotel/max1024x768/422899195.jpg?k=de255742c87237d500e14a8f25dc9cf46302ac2e28ab624c6f8c7d77f283aadd&o=&hp=1" alt="..." /></div>
            <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h3 class="text-white">**เกรด 2 ดาว**</h3>
                            <h4 class="text-white">เตียง 5 ฟุต</h4>
                            <h4 class="text-white">เฟอร์นิเจอร์</h4>

                            <p class="mb-0 text-white-50"></p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row gx-0 justify-content-center">
            <div class="col-lg-6"><img class="img-fluid" src="https://images.hungryhub.com/uploads/review/cover/211394/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7_Hagi_Centara_Grand_at_Central_Plaza_Ladprao_Bangkok_%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99_%E0%B8%A5%E0%B8%B2%E0%B8%81_%E0%B8%A1%E0%B8%B2_5.jpg " alt="..." /></div>
            <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">เครื่องดื่มอาหารเช้า-No View</h4>
                            <p class="mb-0 text-white-50">ขอบคุณสำหรับห้องที่คุณเลือก</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>
    
    <div class="container px-4 px-lg-5">

<div class="row gx-0 mb-4 mb-lg-5 align-items-center">
    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww" alt="..." /></div>
    <div class="col-xl-4 col-lg-5">
    <div class="featured-text text-center text-lg-left">
          <h4>แนวห้องที่2 </h4>
          <p class="text-black-100 mb-0">ราคา 1000฿/คืน</p>
          <p class="text-black-100 mb-0">หมายเลขห้องที่ 102 </p>
          <Link to="/Arrs">
                  <button onClick={() => handlejong('102', 1000)}>จองห้องที่2</button>
            </Link>

        </div>

    </div>
</div>


<div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
    <div class="col-lg-6"><img class="img-fluid" src=" https://media-cdn.tripadvisor.com/media/photo-s/0d/57/f2/1a/deluxe-double-room--v14391973.jpg" alt="..." /></div>
    <div class="col-lg-6">
        <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h3 class="text-white">***เกรด3ดาว***</h3>
                    <h4 class="text-white">เตียง 5ฟุต</h4>
                    <h4 class="text-white">ตู้เย็น</h4>
                    <h4 class="text-white">เฟอร์นิเจอร์</h4>
                    <p class="mb-0 text-white-50"></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row gx-0 justify-content-center">
    <div class="col-lg-6"><img class="img-fluid" src="https://images.hungryhub.com/uploads/review/cover/211394/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7_Hagi_Centara_Grand_at_Central_Plaza_Ladprao_Bangkok_%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99_%E0%B8%A5%E0%B8%B2%E0%B8%81_%E0%B8%A1%E0%B8%B2_5.jpg " alt="..." /></div>
    <div class="col-lg-6 order-lg-first">
        <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">เครื่องดื่มอาหารเช้า-No Veiw</h4>
                    <p class="mb-0 text-white-50">ขอบคุณสำหรับห้องที่คุณเลือก</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<br/>

<div class="container px-4 px-lg-5">

<div class="row gx-0 mb-4 mb-lg-5 align-items-center">
    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww" alt="..." /></div>
    <div class="col-xl-4 col-lg-5">
    <div class="featured-text text-center text-lg-left">
          <h4>แนวห้องที่3 </h4>
          <p class="text-black-100 mb-0">ราคา 1500฿/คืน</p>
          <p class="text-black-100 mb-0">หมายเลขห้องที่ 103 </p>
          <Link to="/Arrs">
                  <button onClick={() => handlejong('103', 1500)}>จองห้องที่3</button>
            </Link>

        </div>

    </div>
</div>


<div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
    <div class="col-lg-6"><img class="img-fluid" src=" https://www.novotelbkk.com/wp-content/uploads/sites/62/2016/11/Executive-Room-06.jpg" alt="..." /></div>
    <div class="col-lg-6">
        <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h3 class="text-white">****เกรด4ดาว****</h3>
                    <h4 class="text-white">เตียง6ฟุต</h4>
                    <h4 class="text-white">ตู้เย็น</h4>
                    <h4 class="text-white">เครื่องทำน้ำอุ่น</h4>
                    <h4 class="text-white">เฟอร์นิเจอร์</h4>
                    <p class="mb-0 text-white-50"></p>
                   
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row gx-0 justify-content-center">
    <div class="col-lg-6"><img class="img-fluid" src="https://images.hungryhub.com/uploads/review/cover/211394/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7_Hagi_Centara_Grand_at_Central_Plaza_Ladprao_Bangkok_%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99_%E0%B8%A5%E0%B8%B2%E0%B8%81_%E0%B8%A1%E0%B8%B2_5.jpg" alt="..." /></div>
    <div class="col-lg-6 order-lg-first">
        <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">เครื่องดื่มอาหารเช้า-No Veiw</h4>
                    <p class="mb-0 text-white-50">ขอบคุณสำหรับห้องที่คุณเลือก</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<br/>

<div class="container px-4 px-lg-5">

<div class="row gx-0 mb-4 mb-lg-5 align-items-center">
    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww" alt="..." /></div>
    <div class="col-xl-4 col-lg-5">
    <div class="featured-text text-center text-lg-left">
          <h4>แนวห้องที่4 </h4>
          <p class="text-black-100 mb-0">ราคา 2000฿/คืน</p>
          <p class="text-black-100 mb-0">หมายเลขห้องที่ 104 </p>
          <Link to="/Arrs">
                  <button onClick={() => handlejong('104', 1500)}>จองห้องที่4</button>
            </Link>

        </div>

    </div>
</div>


<div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
    <div class="col-lg-6"><img class="img-fluid" src=" https://www.agoda.com/wp-content/uploads/2019/05/Best-hotels-in-Tokyo-1.Palace-Hotel-Tokyo2.jpg" alt="..." /></div>
    <div class="col-lg-6">
        <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h3 class="text-white">*****เกรด5ดาว***** </h3>
                    <h4 class="text-white">เตียง6ฟุต</h4>
                    <h4 class="text-white">ตู้เย็น</h4>
                    <h4 class="text-white">เครื่องทำน้ำอุ่น</h4>
                    <h4 class="text-white">เฟอร์นิเจอร์</h4>
                    <h4 class="text-white">เซอร์วิส ออนไลน์</h4>
                    <p class="mb-0 text-white-50"></p>
                   
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row gx-0 justify-content-center">
    <div class="col-lg-6"><img class="img-fluid" src="https://images.hungryhub.com/uploads/review/cover/211394/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7_Hagi_Centara_Grand_at_Central_Plaza_Ladprao_Bangkok_%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99_%E0%B8%A5%E0%B8%B2%E0%B8%81_%E0%B8%A1%E0%B8%B2_5.jpg " alt="..." /></div>
    <div class="col-lg-6 order-lg-first">
        <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">เครื่องดื่มอาหารเช้า-View</h4>
                    <p class="mb-0 text-white-50">ขอบคุณสำหรับห้องที่คุณเลือก</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


</section>


    </>

  )
}

export default Projects