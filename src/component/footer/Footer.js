import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
      return (
        <footer class="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-2 mb-md-0 mb-3">
                        
                    </div>
                    <div class="col-md-5 mt-md-0 mt-3">
                        <h4 class="text-uppercase">Contact US </h4>
                        <p class = "footer_contact">위치 : 전북대 7호관 지하 7007호</p>
                        <p class = "footer_contact">전화 : 010-4311-0624</p>
                        <p class = "footer_contact">메일 : wjddlstn0614@naver.com</p>
                        <br/>
                    </div>
                    
                    <div class="col-md-3 mb-md-0 mb-3">
                        
                        <h1><img src="./hitit_logo.png" alt="" height="42" width="42"/> HIT-IT</h1>
                    </div>


                </div>
            </div>
        </footer>
      );
  }
}

export default Footer;