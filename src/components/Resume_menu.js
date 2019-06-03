import React, { Component } from 'react' ;

class Resume_menu extends Component{

    render(){
        return( 
            <aside class="col-sm-4">

                <div class="widget-holder card">
                    <h4>Biodata </h4>
                    <div class="widget">

                            <p><i class="fa fa-user"></i> Amad Hendro Lukito</p>
                            <p><i class="fa fa-male"></i> Laki-laki</p>
                            <p><i class="fa fa-calendar"></i> Madiun, 24 Mei 1995</p>

                        <ul class="categories">
                            

                            <li><div class="chip"> <a href="mailto:ahendroo1@gmail.com" ><i class="fa fa-envelope"></i> Email : Ahendroo1@gmail.com</a></div></li>
                            
                            <li><div class="chip"> <a href="https://wa.me/6283845786165"   ><i class="fa fa-whatsapp"></i> WA : +6283845786165</a></div></li>
                            
                            <li><div class="chip"> <a href="https://www.facebook.com/ahendroo" target="_blank"  ><i class="fa fa-facebook"></i> facebook.com/ahendroo</a></div></li>
                            
                            <li><div class="chip"> <a href="https://twitter.com/Ahendroo"  target="_blank" ><i class="fa fa-twitter"></i> twitter.com/ahendroo</a></div></li>
                        
                            <li><div class="chip"> <a href="https://github.com/ahendroo1" target="_blank"  ><i class="fa fa-github"></i> github.com/ahendroo1</a></div></li>
                            <li><div class="chip"> <a href="https://www.linkedin.com/in/amad-hendro-976091b8" target="_blank"  ><i class="fa fa-linkedin"></i> Amad Hendro </a></div></li>
                            
                        </ul>
                        
                        
                    
                    </div>
                </div>



                <div class="widget-holder card">

                    <h4>Pendidikan</h4>
                    <div class="widget">
                        <div class="Media">
                            <a href="http://bsi.ac.id" target="_blank" style={{color:"black"}}><img class="Media-figure" src="http://1.bp.blogspot.com/-Oi1dQFVHExs/Tg2O2i7ATJI/AAAAAAAAD1I/eVhwhwjRMJs/s320/LOGO+BINA+SARANA+INFORMATIKA+BSI.jpg" height="80px;" alt="BSI" /></a>
                            <div class="Media-body">
                                <h6 class="Media-title"><a href="http://bsi.ac.id" style={{color:"black"}}>Bina Sarana Informatika</a></h6>
                                <p> Diploma III</p>
                                <p> Sistem Informasi</p>
                            </div>
                        </div>
                        
                        <hr />

                        <div class="Media">
                        <a href="https://www.hacktiv8.com" target="_blank" style={{color:"black"}}><img class="Media-figure" src="https://www.convergencevc.com/wp-content/uploads/2018/12/Logo-Hacktiv8-bordered.png" alt="h8" /></a>
                            <div class="Media-body">
                                <h6 class="Media-title"><a href="https://www.hacktiv8.com" style={{color:"black"}}>Hacktiv8</a></h6>
                                <p>Coding School</p>
                                <p>Front-End Developer</p>
                            </div>
                        </div>
                        <div class="Media" >
                            <a href="https://www.purwadhika.com" target="_blank" style={{color:"black"}}><img class="Media-figure" src="https://webdev-id.com/img/logo/1543990556_960468.png" alt="purwadhika" /></a>
                            <div class="Media-body">
                                <h6 class="Media-title"><a href="https://www.purwadhika.com" style={{color:"black"}}>Purwadhika</a></h6>
                                <p>Coding School</p>
                                <p>Full-Stack Developer</p>
                            </div>
                        </div>
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