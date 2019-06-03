import React, { Component } from 'react' ;

class Resume_menu extends Component{

    render(){
        return( 
            <aside class="col-sm-4">

                <div class="widget-holder card">
                    <h4>Biodata </h4>
                    <div class="widget">
                        <p><i class="fa fa-user"></i> My full name : Amad Hendro Lukito</p>
                        <p><i class="fa fa-male"></i> Gender : Man</p>
                        <p><i class="fa fa-calendar"></i> Born : Madiun, 24 Mei 1995</p>
                        {/* <p><i class="fa fa-envelope"></i> Email : Ahendroo1@gmail.com</p> */}
                        {/* <p><i class="fa fa-whatsapp"></i> WA : +6283845786165</p> */}
                        
                        <p> <a href="mailto:ahendroo1@gmail.com" style={{ color: 'black' }} ><i class="fa fa-envelope"></i> Email : Ahendroo1@gmail.com</a></p>
                        
                        <p> <a href="https://wa.me/6283845786165" style={{ color: 'black' }} ><i class="fa fa-whatsapp"></i> WA : +6283845786165</a></p>
                        
                        <p> <a href="https://www.facebook.com/ahendroo" style={{ color: 'black' }} ><i class="fa fa-facebook"></i> ahendroo1</a></p>
                        
                        <p> <a href="https://twitter.com/Ahendroo" style={{ color: 'black' }} ><i class="fa fa-twitter"></i> ahendroo1</a></p>
                       
                        <p> <a href="https://github.com/ahendroo1" style={{ color: 'black' }} ><i class="fa fa-github"></i> ahendroo1</a></p>
                    
                    </div>
                </div>

                <div class="widget-holder card">

                    <h4>Portofolio</h4>
                    <div class="widget">
                        <div class="Media">
                            <img class="Media-figure" src="https://jakcloth.co.id/template/assets/images/logo-jakcloth@1x.png" height="80px;" alt="JakCloth" />
                            <div class="Media-body">
                                <h6 class="Media-title">www.jakcloth.co.id</h6>
                                <p>Application Development & Project Manajemen</p>
                            </div>
                        </div>
                        
                        <hr />

                        <div class="Media">
                            <img class="Media-figure" src="https://www.validnews.id/assets/images/icons/icon-validnews.png" alt="Validnews" />
                            <div class="Media-body">
                                <h6 class="Media-title">www.validnews.co</h6>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget-holder card">
                    <h4>Scaling Coders</h4>
                    <div class="widget">
                        <ul class="categories">
                            <li><a href="#">
                                <div class="chip">HTML - CSS</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">PHP Codeigniter - Laravel</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">Bootstrap - Material Design</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">Javascript - JQuery & Ajax</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">MongoDB & NodeJS</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">MySql/Sql - Firebase Database</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">ReactJS - React Native</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">Git - Github & Deploy Netlify</div>
                            </a></li>
                            <li><a href="#">
                                <div class="chip">Fundamental Ruby & Python</div>
                            </a></li>
                        </ul>
                    </div>
                </div>
                
            </aside>
        );
    }
}

export default Resume_menu;