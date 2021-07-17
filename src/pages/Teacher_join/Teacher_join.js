import React from "react";
import "./Teacher_join.css";
import ImgSrc from "../../shared/ImgSrc";
import StarIcon from '@material-ui/icons/Star';

import { CarouselWrapper } from 'react-pretty-carousel';

function Teacher_join() {
    return (
        <div>
            <section className="teacher_join__container">
      <div className="teacher_join__main">
        <div className="teacher_join__info--container">
          <div className="teacher_join__info">
            <h1 className="teacher_join__h1"><span style={{color: '#FF450B'}}>Welcome  </span>
            Teachers</h1>
            <p className="teacher_join_p">to the world of resources</p>
          </div>
        </div>
        <div className="wt1">
          <img
            src={ImgSrc.wt1}
            alt="teacher"
            className="wt1--img"
          />
        </div>
        </div>
        </section>

<section className="teacher_join__container1">
      <div className="teacher_join__main1">
      <div className="ws2">
          <img
            src={ImgSrc.wt2}
            alt="About"
            className="wt2--img"
          />
        </div>
        <div className="teacher_join__info--container1">
          <div className="teacher_join__info1">
            <h1 className="teacher_join__h11"> Tutorial <span style={{color: '#FF450B'}}>Videos </span></h1>
            <p className="teacher_join_p1">Get the best possible video leactures Video Lectures <br/>
            available on the web free of cost,<br/>
            with new technologies and interactive sessions.<br/></p>
          </div>
        </div>
        </div>
        </section>


        <section className="teacher_join__container2">
        <div className="teacher_join__main2">
        <div className="teacher_join__info--container2">
          <div className="teacher_join__info2">
            <h1 className="teacher_join__h12"> On Demand <span style={{color: '#FF450B'}}> Test-series</span></h1>
            <p className="teacher_join_p2">Learning isn’t enough,<br/>
            to test your skill set is seldom a wise decesion,<br/>
            keeping that in mind,<br/>
            we have made the best probable test- series<br/></p>
          </div>
        </div>
      <div className="wt3">
          <img
           src={ImgSrc.wt3}
            alt="Why"
            className="wt3--img"
          />
        </div>
        </div>
        </section>

        <section className="teacher_join__container1">
      <div className="teacher_join__main1">
      <div className="wt4">
          <img
            src={ImgSrc.wt4}
            alt="About"
            className="wt4--img"
          />
        </div>
        <div className="teacher_join__info--container1">
          <div className="teacher_join__info1">
            <h1 className="teacher_join__h11"> Tech <span style={{color: '#FF450B'}}> Blogs </span></h1>
            <p className="teacher_join_p1">Sharing what you know,with the world,<br/>
            and learning from others experience,<br/>
            is the best way to grow,believing in this <br/>
            we have Blogs customized for your users<br/></p>
          </div>
        </div>
        </div>
        </section>

        <section className="teacher_join__container2">
        <div className="teacher_join__main2">
        <div className="teacher_join__info--container2">
          <div className="teacher_join__info2">
            <h1 className="teacher_join__h12"> Your<span style={{color: '#FF450B'}}> Motivation ?</span></h1>
            <p className="teacher_join_p2">Failures dishearten  people,<br/>
            and we understand that,<br/>
            thus we bring our motivational series to help you,<br/>
            learn from failures,and <br/>
            look towards a bright future<br/></p>
          </div>
        </div>
      <div className="wt5">
          <img
           src={ImgSrc.wt5}
            alt="Why"
            className="wt5--img"
          />
        </div>
        </div>
        </section>

        <h1 className="teacher_join__h3"> Teachers&nbsp;<span style={{color: '#FF450B'}}>Speak</span></h1>
     <section className="carouselsd">
       <div className="c_info">
           <div className="Imgsd">
           <img
            src={ImgSrc.wt6}
            alt="About"
            className="wt6--img"
          />
           </div>
           <div className="cardsd">
             <CarouselWrapper items={1} mode="gallery">
               <div class="cardt">
                <img
                    src={ImgSrc.pro}
                    alt="Joint"
                    className="pro--img"
                />
                <div class="containert">
                <ul class="ra-rating-star">
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                            </ul>
                 <h4 class="joinht">Ruchi Sharma</h4> 
                 <p class="pt">Lorem Ipsum is simply dummy text of the printing<br/>
                  and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s,<br/>
                    when an unknown printer took .</p> 
                 </div>
                </div>


                <div class="cardt">
                <img
                    src={ImgSrc.pro}
                    alt="Joint"
                    className="pro--img"
                />
                <div class="containert">
                <ul class="ra-rating-star">
                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                            </ul>
                 <h4 class="joinht">Ruchi Sharma</h4> 
                 <p class="pt">Lorem Ipsum is simply dummy text of the printing<br/>
                  and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s,<br/>
                    when an unknown printer took .</p> 
                 </div>
                </div>


                <div class="cardt">
                <img
                    src={ImgSrc.pro}
                    alt="Joint"
                    className="pro--img"
                />
                <div class="containert">
                <ul class="ra-rating-star">
                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                            </ul>
                 <h4 class="joinht">Ruchi Sharma</h4> 
                 <p class="pt">Lorem Ipsum is simply dummy text of the printing<br/>
                  and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s,<br/>
                    when an unknown printer took .</p> 
                 </div>
                </div>
             </CarouselWrapper>
           </div>
        </div>
    </section>

   

</div>
)
   
}

export default Teacher_join

