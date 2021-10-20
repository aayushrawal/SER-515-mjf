import React from "react";
import "./AboutUs.scss";
import Dhruv from '../assets/img/profile/dhruv.jpeg'
import Sameet from '../assets/img/profile/Sameet.jpeg'
import Saurabh from '../assets/img/profile/Saurabh.jpeg'
import Punith from '../assets/img/profile/puneeth.jpeg'
const AboutUs = () => {
    return (

        <div class="container">
 
            <h1 class="entry-title">About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.</p>
            <h1 class="entry-title">Developers</h1>
            <hr></hr>
            <div class="row" style={{ backgroundColor: "#E8E8E8"}}>
                <h4 style={{ textAlign: "left"}}>Dhruv Patel</h4>
                <div class="col-md-3">
                    <img src={Dhruv} alt="placeholder" width="300px" height="260px"></img>
                </div>
                <div class="col-md-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.</p>
                </div>
            </div>

            <div class="row">
                <h4 style={{ textAlign: "right"}}>Sameet Krishna</h4>
                <div class="col-md-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.</p>
                </div>
                <div class="col-md-3">
                <img src={Sameet} alt="placeholder" width="300px" height="260px"></img>
                </div>
            </div>

            <div class="row" style={{ backgroundColor: "#E8E8E8"}}>
                <h4 style={{ textAlign: "left"}} >Saurabh Rane</h4>
                <div class="col-md-3">
                <img src={Saurabh} alt="placeholder" width="300px" height="260px"></img>
                </div>
                <div class="col-md-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.</p>
                </div>
            </div>

            <div class="row">
                <h4 style={{ textAlign: "right"}}>Punith Vadi </h4>
                <div class="col-md-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.</p>
                </div>
                <div class="col-md-3">
                <img src={Punith} alt="placeholder" width="300px" height="260px"></img>
                </div>
            </div>

        </div>

    );
};

export default AboutUs;
