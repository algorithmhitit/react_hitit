import React from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
//component import
import Title from './title/Title';
import Gallery from './gallery/Gallery';
import { Container } from 'react-bootstrap';
import * as Scroll from 'react-scroll';

var Element = Scroll.Element;
var scroller = Scroll.scroller;

class App extends React.Component {
  render() {
      return (

        <div>
          <div id="scroll-animate-main">
            <div class="wrapper-parallax">
              <header>
                <Header />
              </header>
              <Element name="homeInsideContainer">
                <Title />
              </Element>
              <Element name="featuresInsideContainer">
                <section class="black"> 
                  <div class="content">
                    <h1 align="center"> 동아리 소개</h1>
                    <br/>
                    <p>Hit it은 도래하고있는 정보화시대에 있어 필수불가결한 웹 분야에 중점을 두고 활동하는 전북대학교 유일의 웹동아리입니다.</p>
                    <p>2012년 창설 이후 이러한 웹기술에 관심이 있는 학생들이 모여 프로그래밍 스터디나 홈페이지 제작 실습을 통해 웹에 대한 깊이 있는 탐구를 진행해오고 있습니다.</p>
                    <p>또한 재학생과 신입생간의 스터디 활동과 MT, 체육대회 등의 다양한 친목활동을 통해 동아리원끼리의 화합도 도모하고 있습니다.</p>
                  </div>
                </section>
              </Element>
              
              <Element name="photoInsideContainer">
                <section class="gray">  
                  <div class="content">
                    {/* <h1>Resize your browser and see how they adapt.</h1> */}
                    <Gallery />
                  </div>
                </section>
              </Element>
              <section class="black">  
                  <div class="content">
                    <h1 align="center"> 주요 활동</h1>
                    <br/>
                    <p>HIT-IT은 웹동아리로서 웹기술 능력을 개발하고 있습니다.</p>
                    <p>SCPC(삼성 프로그래밍 경진대회), ACM-ICPC 대회, 알고리즘 스터디 등의 활동을 통해 프로그래밍 기초 능력인 알고리즘을 설계하는 능력을 향상시키고 홈페이지 제작 스터디, Python 스터디를 통해 웹 프로그래밍을 익히고 있습니다.</p>
                    <p>또한 캡스톤 디자인과 컴퓨터 공학부 작품경진대회 등의 참가를 통해 실제 프로그래밍 이용한 제품을 만드는 경험을 하고있습니다.</p>
                    <p>마지막으로 동아리 친목 활동과 졸업 선배 멘토링 등으로 정보 교류 및 기술 공유 등을 하고 있습니다.</p>
                  </div>
              </section>

              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </div>
      );
  }
}

export default App;