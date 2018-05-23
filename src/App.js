import React, { Component } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Resume_content from './components/Resume_content';
import Resume_menu from './components/Resume_menu';
import Resume_footer from './components/Resume_footer';
// import $ from 'jquery';
// import './style/style.css';

class App extends Component {
  hitung(x){
    return x*x;
  };
  
  constructor(){
    super();
    this.nama = 'amad hendro';
  }

  render() {
    function login(data){
      const undahlogin = data;
      if (undahlogin) {
        return (
          <div class="pull-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPlvC70nvxGemyIgUOIamxDC0426qdbXiaDbqcylTd_Qd7BY3" class="img-circle" width="70px;" />
          </div>
        );
      }
      return 'anda belum login';
    }


    function fullname(id){
      return id.nama + '-' + id.marga
    }

    const id = {
      nama: 'Andi',
      marga: 'Hasibuan'
    };

    var style = {
      background:'black',
      color:'white',
      padding:'10px',
    }

    const siswa = ['andi', 'dona',];
    const list_siswa = siswa.map((siswa, index) => <li key={index}>{siswa}</li> );
    // var clas='btn btn-primary'

    return (
      <div>
          <div class="back-button">
                <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" class="img-circle" alt="Amad Hendro" width="50px" />
          </div>

          <div class="single-background">
          </div>

          <section class="single-page">
            <div class="container">

              {/* <div class="section-title">
                        <h4 class="text-uppercase text-center"><img src="images/icons/post-it.png" alt="demo" />Blog</h4>
                    </div> */}

              <div class="row" id="primary">

                {/* resume content */}
                <Resume_content />

                {/* resume menu */}
                <Resume_menu />
              </div>
            </div>
          </section>

          <div id="scroll-top">
            <div id="scrollup"><i class="fa fa-angle-up"></i></div>
          </div>

          {/* resume footer */}
          <Resume_footer />

        {/* <Header /> */}
        {/* {login(true)}
        <div style={style} class="content">
          <button class={'btn btn-primary pull-right'}>Buka</button>
          <h3>D</h3>
          {this.hitung(3)}
          <br />
          {fullname(id)}
          <br />
          {list_siswa}
        </div> */}
        {/* <Content /> */}
        {/* <Footer /> */}
      </div>
    );
  }
  
}

export default App;
