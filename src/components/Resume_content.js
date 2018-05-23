import React, { Component } from 'react';
// import './../style/Header.css';
class Resume_content extends Component {

    render(){
    
        var day = new Date();
        if ((day.getDay()+1) == 1) {
            var day_hari = 'Minggu';
        } else if ((day.getDay() + 1) == 2) {
            var day_hari = 'Senin';
        } else if ((day.getDay() + 1) == 2) {
            var day_hari = 'Selasa';
        } else if ((day.getDay() + 1) == 3) {
            var day_hari = 'Rabu';
        } else if ((day.getDay() + 1) == 4) {
            var day_hari = 'Kamis';
        } else if ((day.getDay() + 1) == 5) {
            var day_hari = "Jum'at";
        } else if ((day.getDay() + 1) == 6) {
            var day_hari = 'Sabtu';
        }

        if ((day.getMonth() + 1) == 1) {
            var day_bulan = 'Januari';
        } else if ((day.getMonth() + 1) == 2) {
            var day_bulan = 'Februari';
        } else if ((day.getMonth() + 1) == 2) {
            var day_bulan = 'Maret';
        } else if ((day.getMonth() + 1) == 3) {
            var day_bulan = 'April';
        } else if ((day.getMonth() + 1) == 4) {
            var day_bulan = 'Mei';
        } else if ((day.getMonth() + 1) == 5) {
            var day_bulan = "Juni";
        } else if ((day.getMonth() + 1) == 6) {
            var day_bulan = 'Juli';
        }

        return(
            <div id="content" class="col-sm-8">
                <article class="post card">
                    <div class="post-image">
                        <img src="https://cdn-images-1.medium.com/max/1200/1*Aix4x8266PpYWefv5JAEOQ.jpeg" alt="demo" />
                    </div>
                    <header>
                        <h2> Amad Hendro Lukito
                        <time datetime="">{day_hari + ', ' + (day.getDate()+1) + ' ' + day_bulan + ' ' + (day.getFullYear()+1)}</time>
                        </h2>
                        <hr />
                        <div class="post-details">
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                Full Stack Developer
                            </div>
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                UI/UX Designer
                            </div>
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                System Analist
                            </div>
                        </div>
                    </header>
                    <div class="post-body">

                        <h3>UI/UX Designer</h3>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor.
                            Aenean
                            lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.
                            Curabitur
                                        blandit tempus porttitor.</p>

                        <p>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            Vestibulum
                            id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at
                                        eros. Sed posuere consectetur est at lobortis.</p>

                        <h3>Full Stack Developer</h3>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis
                            natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.</p>

                        <h3>System Analist</h3>
                        <p>Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
                            scelerisque
                            nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                            vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est
                            non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem
                            malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula,
                                        eget lacinia odio sem nec elit.</p>
                    </div>
                </article>

            </div>
        );
    }
}

export default Resume_content;