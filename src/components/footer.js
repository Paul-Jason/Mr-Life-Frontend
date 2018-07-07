import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <footer class="page-footer font-small cyan darken-3 mt-4">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 py-5">
                    <div class="mb-5 flex-center">
                      <a class="fb-ic">
                        <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="tw-ic">
                        <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="gplus-ic">
                        <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="li-ic">
                        <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="ins-ic">
                        <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                      <a class="pin-ic">
                        <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
              </div>
            </footer>
        );   
    }
}

export default Footer;