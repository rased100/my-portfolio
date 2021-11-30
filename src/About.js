import React from "react";
import "./About.css";
import aboutImg from "./img/about1.png";
// import aboutImg from "./img/my-bg2.png";
function About() {
  //  Up To Top Btn
  // window.addEventListener("scroll", function () {
  //   const upToTop = document.querySelector("a.bottom__to__top");
  //   upToTop.classList.toggle("active", window.scrollY > 0)
  // });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>
              <div className="about__button d__flex align__items__center">
                <a target="_blank" href="https://doc-04-20-docs.googleusercontent.com/docs/securesc/1smc427lb3d0ricpghjmf24f5g7lsi7k/6nj91uc7aohaqgcuoht82t7ojao1ovou/1638242025000/01492306813066744517/01816493426018839436/1NTksCJOOiQqLEYPetOp8jW8Iyw3Nb5WO?e=download&authuser=0">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                {/* <a target="_blank" href="https://drive.google.com/file/d/1NTksCJOOiQqLEYPetOp8jW8Iyw3Nb5WO/view?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a> */}
                {/* <Link></Link> */}
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      {/* <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div> */}
    </div>
  );
}

export default About;
