import React, { Component } from 'react';
// import './../style/Header.css';
class Resume_content extends Component {

    render(){
    
        var day = new Date();
        if ((day.getDay()+1) == 1) {
            var day_hari = 'Minggu';
        } else if ((day.getDay() + 1) == 2) {
            var day_hari = 'Senin';
        } else if ((day.getDay() + 1) == 3) {
            var day_hari = 'Selasa';
        } else if ((day.getDay() + 1) == 4) {
            var day_hari = 'Rabu';
        } else if ((day.getDay() + 1) == 5) {
            var day_hari = 'Kamis';
        } else if ((day.getDay() + 1) == 6) {
            var day_hari = "Jum'at";
        } else if ((day.getDay() + 1) == 7) {
            var day_hari = 'Sabtu';
        }

        if ((day.getMonth() + 1) == 1) {
            var day_bulan = 'Januari';
        } else if ((day.getMonth() + 1) == 2) {
            var day_bulan = 'Februari';
        } else if ((day.getMonth() + 1) == 3) {
            var day_bulan = 'Maret';
        } else if ((day.getMonth() + 1) == 4) {
            var day_bulan = 'April';
        } else if ((day.getMonth() + 1) == 5) {
            var day_bulan = 'Mei';
        } else if ((day.getMonth() + 1) == 6) {
            var day_bulan = "Juni";
        } else if ((day.getMonth() + 1) == 7) {
            var day_bulan = 'Juli';
        } else if ((day.getMonth() + 1) == 8) {
            var day_bulan = 'Agustus';
        } else if ((day.getMonth() + 1) == 9) {
            var day_bulan = 'September';
        } else if ((day.getMonth() + 1) == 10) {
            var day_bulan = 'Oktober';
        } else if ((day.getMonth() + 1) == 11) {
            var day_bulan = 'November';
        } else if ((day.getMonth() + 1) == 12) {
            var day_bulan = 'Desember';
        }
        

        return(
            <div id="content" class="col-sm-8">
                <article class="post card">
                    <div class="post-image" >
                        <img src="https://cdn-images-1.medium.com/max/1200/1*Aix4x8266PpYWefv5JAEOQ.jpeg" alt="medium-ahendroo" />
                    </div>
                    <header>
                        <h2> Amad Hendro
                        <time datetime="">{day_hari + ', ' + (day.getDate()) + ' ' + day_bulan + ' ' + (day.getFullYear())}</time>
                        </h2>
                        <hr />
                        <div class="post-details">
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                System Analist
                            </div>
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                Front-End Developer
                            </div>
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                Back-End Developer
                            </div>

                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                Full-Stack Developer
                            </div>
                            <div class="chip">
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                Database Administrator Manajemen
                            </div>
                            {/* <div class="chip"> */}
                                {/* <img src="https://pbs.twimg.com/profile_images/918687180813250560/wMjdHTBG_400x400.jpg" alt="Contact Person" /> */}
                                {/* System Analist */}
                            {/* </div> */}
                        </div>
                    </header>
                    <div class="post-body">

                        <h3>System Analyst</h3>
                        <p>
                        System Analyst adalah seseorang yang bertanggung jawab atas penelitian, perencanaan, pengkoordinasian, dan merekomendasikan pemilihan perangkat lunak dan sistem yang paling sesuai dengan kebutuhan struktural bisnis atau perusahaan. Analis sistem memegang peranan yang sangat penting dalam proses pengembangan sistem. Seorang analis sistem harus memiliki setidaknya empat keahlian: analisis, teknis, manajerial, dan interpersonal (berkomunikasi dengan orang lain). Kemampuan analisis memungkinkan seorang analis sistem untuk memahami fungsi-fungsinya, pemahaman tersebut akan membantu dalam mengidentifikasi kemungkinan terbaik serta menganalisis penyelesaian permasalahan. Keahlian teknis akan membantu seorang analis sistem untuk memahami potensi dan keterbatasan dari teknologi informasi. Seorang analis sistem harus mampu untuk bekerja dengan berbagai jenis bahasa pemrograman, sistem operasi, serta perangkat keras yang digunakan. Keahlian manajerial akan membantu seorang analis sistem mengelola proyek, sumber daya, risiko, dan perubahan. Keahlian interpersonal akan membantu analis sistem dalam berinteraksi dengan pengguna akhir sebagaimana halnya dengan analis, programer, dan profesi sistem lainnya.

Analis sistem bisa pula menjadi perantara atau penghubung antara perusahaan penjual perangkat lunak dengan organisasi tempat ia bekerja, dan bertanggung jawab atas analisis biaya pengembangan, usulan desain dan pengembangan, serta menentukan rentang waktu yang diperlukan. Analis sistem bertanggung jawab pula atas studi kelayakan atas sistem komputer sebelum membuat satu usulan kepada pihak manajemen perusahaan.
                        
                        </p>
                        
                        <p>Pada dasarnya seorang analis sistem melakukan hal-hal berikut:
                        </p>
                        
                        
                        <ol><li>Berinteraksi dengan pelanggan untuk memahami kebutuhan sistem yang akan di gunakan</li>
<li>Berinteraksi dengan desainer untuk mengemukakan antarmuka yang diinginkan atas suatu perangkat lunak</li>
<li>Berinteraksi ataupun memandu programer dalam proses pengembangan sistem agar tetap berada pada jalurnya</li>
<li>Melakukan pengujian sistem baik dengan data sampel atau data sesungguhnya untuk membantu para penguji</li>
<li>Mengimplementasikan sistem baru/sistem usulan yang akan digunakan perusahaan</li>
<li>Menyiapkan dokumentasi berkualitas</li></ol>

                        <h3>
                            Front-End Developer
                        </h3>
                        <p>
                        Bagian front-end dari sebuah website adalah bagian yang langsung dilihat oleh user. User juga bisa langsung berinteraksi pada bagian ini. Bagian ini dibangun menggunakan HTML, CSS, dan JavaScript.

HTML (HyperText Markup Languange) adalah tulang punggung dari web. Semua website yang kamu kunjungi dibuat menggunakan HTML. HTML menentukan struktur dan konten website. Versi terakhir dari HTML adalah HTML5.

CSS (Cascading Style Sheets) adalah bahasa pemograman yang mengontrol tampilan HTML pada halaman website. CSS menentukan warna, font, gambar background, dan bahkan bagaimana tampilan keseluruhan website-mu. Versi terakhir dari CSS adalah CSS3, yang menambahkan fitur seperti interaktifitas dan animasi dasar.

Kamu bisa menciptakan sebuah website hanya dengan menggunakan HTML dan CSS, tetapi yang benar-benar akan membuat website kamu tampil menarik adalah JavaScript. Dengan JavaScript, kamu bisa melakukan banyak hal, seperti interaktifitas, animasi yang lebih kompleks, dan bahkan kamu juga bisa membuat fully feature web application.

Dulu (sekitar tahun 2012), kebanyakan browser tidak dapat menginterpretasikan JavaScript dengan baik sehingga menambahkan fungsi-fungsi kompleks JavaScript bukanlah ide yang bagus. Tetapi, saat ini browser sudah menjadi lebih canggih dan bisa menjalankan JavaScript dengan baik. Ini menjadikan JavaScript tidak hanya digunakan untuk bagian back-end lagi. JavaScript sendiri juga telah mengalami banyak kemajuan dengan bertambahnya framework-framework seperti Angulars, jQuery, dan Node.js. Singkatnya, apa yang didefinisikan dengan front-end telah banyak berubah dalam waktu yang singkat.

Front-end developer menggunakan HTML, CSS, dan JavaScript untuk coding website. Mereka menciptakan design website dan kemudian membuat website tersebut dapat berfungsi.

Sebagian website hanya menggunakan HTML, CSS, dan JavaScript. Tetapi sebagian lainnya juga ada menggunakan back-end programming language.
                        </p>
                        <p>10 Skill yang Harus Dimiliki Front-End Developer :
                            </p>


                                <ol>
                                    <li>
                                        HTML / CSS Programming Language
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        Framework CSS dan JavaScript
                                    </li>
                                    <li>
                                        Preprocessor CSS
                                    </li>
                                    <li>
                                        Version Control System (Git)
                                    </li>
                                    <li>
                                        Responsive & Mobile Design
                                    </li>
                                    <li>
                                        Testing/Debugging
                                    </li>
                                    <li>
                                        Browser Developer Tools
                                    </li>
                                    <li>
                                        Building and Optimizing Tools / Websites
                                    </li>
                                    <li>
                                        Command Line
                                    </li>
                                </ol>

                                <h3>
                                    Back-End Developer
                                </h3>
                                
                                <p>

                                Back-end adalah bagian belakang layar dari sebuah website. Bahasa pemograman untuk back-end development diantaranya adalah PHP, Ruby, Python, dan banyak lainnya.

Satu hal yang akan kamu temui: tidak akan banyak perusahaan yang mem-posting lowongan kerja dengan kalimat “back-end developer”. Yang akan lebih sering kamu temui adalah lowongan pekerjaan untuk “Ruby developer”, “PHP developer”, dll.

Ada banyak hal yang tidak bisa dilakukan oleh JavaScript, namun dapat dilakukan oleh bahasa pemograman back-end. Kebanyakan sistem manajemen konten dibangun melalui back-end programming, contohnya pada aplikasi web yang kompleks. Belajar coding akan mengajarkan kamu menemukan solusi terbaik untuk berbagai masalah, dan terkadang back-end programming adalah bagian dari solusi tersebut.

Untuk membangun sebuah website yang berjalan dengan baik, back-end developer biasanya bekerjasama dengan front-end developer.

                                </p>

                                <p>
                                4 Skill yang Harus Dimiliki Back-End Developer :
                                </p>
                                
                                <ol>
                                    <li>
                                        <p> Serverless Database</p>
                                        <p>Serverless Database adalah database host di pihak ketiga. Jadi Developer tidak lagi pusing memikirkan melakukan backup database, maintenance, ataupun scaling up. Bagi yang pemula, bisa mencoba baqend.com sebagai database. Yang lebih pro bisa coba DynamoDB dari Amazon, Firebase dari Google, dan masih banyak lagi. Tipe database rata-rata NoSQL dan ketika diakses format yang ditampilkan dalam bentuk JSON.

Untuk database user, dalam handle Autentifikasi (login/signup + password), bisa menggunakan auth0.io atau strompath. Pernah lihat google, produk-produk nya banyak (Drive, Email, Docs, Playstore, dll) baik versi web maupun aplikasi mobile, tapi login nya cukup pakai satu ID saja kan? Nah, auth0 dan Strompath adalah rahasianya.

Untuk bisa terhubung dengan database ini semua menggunakan REST API yang disediakan, dan REST APIdapat diakses dengan banyak cara, salah satunya Javascript.</p>
                                        
                                    </li>
                                </ol>



                        <h3>
                            Full-Stack Developer
                        </h3>

                        <p>
                        Full-stack developer bekerja pada bagian front-end dan back-end. Mereka menguasai HTML, CSS, JavaScript, dan satu atau lebih bahasa pemograman back-end.

Perkembangan teknologi saat ini membuat perbedaan front-end dan back-end development menjadi semakin sedikit. Banyak hal yang sebelumnya hanya bisa dilakukan pada bagian back-end, dapat dilakukan juga melalui front-end. Ini membuat semakin banyaknya developer yang menguasai front-end dan back-end programming sekaligus. Pada saat ini, menjadi full-stack developer juga menambah nilai khusus kamu di mata perusahaan.

Tetapi, menjadi full-stack developer bukan berarti kamu harus mengerjakan keseluruhan kode baik front-end atau back-end sebuah website. Kebanyakan full stack developer tetap menghabiskan waktunya pada satu bagian programming saja. Namun, kelebihan dari full-stack developer adalah mereka bisa melakukan analisa masalah pada kedua bagian programming. Ada juga beberapa full-stack developer yang mengerjakan semuanya sendiri, biasanya ini terjadi jika mereka freelance atau satu-satunya developer yang berkerja pada sebuah project.

Bagian paling menarik dari web development adalah sifatnya yang terus berkembang. Apa yang dimaksud sebagai “front-end” atau “back-end” pada saat ini, bisa saja akan berubah secara drastis dalam beberapa tahun ke depan. Mempelajari keduanya akan membuat kamu lebih mempunyai nilai, gampang beradaptasi, dan berpandangan ke depan.
                        </p>

                        <h3>Database Administrator ( DBA )</h3>

                        <p>DBA Kontrol, Kontrol Basis Data sebagai sebuah bisnis sedang dimodifikasi dan dalam beberapa tahun mendatang kita mungkin bisa melihat lebih banyak komputerisasi yang berasal dari kemampuan yang terkait dengan sistem. Ini menyajikan situasi yang menarik bagi DBA, Administrator Server, dan para ahli di bidang yang sama yang menawarkan administrasi dan manajemen tingkat / contoh dan basis data. Apa yang harus mereka lakukan agar mereka menyesuaikan dan memodifikasi dengan periode modifikasi dan lanskap inovasi teknologi? Bagaimana mereka harus menjaga agar keterampilan mereka tetap relevan? Mari kita temukan apa modifikasi dalam inovasi teknologi, bagaimana hal itu terjadi, dan apa yang ditunjukkannya kepada DBA saat ini, yang lebih penting, apa yang harus dilakukan DBA agar tetap sesuai dan dalam pekerjaan.

Otomasi telah mengakhiri banyak proyek biasa dan berulang yang pernah dipertanggungjawabkan oleh DBA. Sumber data NoSQL menawarkan prosedur untuk ruang penyimpanan dan pemulihan informasi yang tidak memerlukan skema yang telah ditentukan. Proses yang lama sekali termasuk server web baru telah dikurangi untuk hanya mengklik beberapa tombol kontrol. Bahkan pabrik informasi basis data relasional memaksa pelanggan ke arah "desktop sebagai layanan" di mana back-end dari fasilitas pc eksklusif berada oleh agen dukungan cloud.

Tetapi DaaS telah diterima untuk sebagian kecil dari apa yang dilakukan banyak perusahaan tidak menyimpan informasi objektif mereka di cloud. Selain itu, tidak semuanya dapat dikomputerisasi pada saat ini. Misalnya, tidak ada banyak alat di sekitar untuk menemukan dan menyelesaikan masalah secara perlahan atau memilih faktor-faktor penting beling terbaik. Selain itu, terkomputerisasi telah menciptakan lingkungan data yang lebih rumit bagi siapa pun tanpa keterampilan administrasi khusus.

</p><p>Cloud Publik</p><p>

Cloud telah berkembang pesat selama beberapa tahun terakhir ini. Visibilitas pertama saya ke cloud adalah melalui aplikasi email SaaS. Kita semua mengenal e-mail dan aplikasi efisiensi di cloud. Kemudian beberapa tahun yang lalu seorang 'penjual buku' online mengguncang industri dengan menghadirkan IaaS di cloud komunitas pada kisaran besar dan terjangkau. Ada beberapa Penyedia Pusat Data bahkan sebelum AWS, yang merupakan semacam IaaS, namun, AWS dibawa ke pasar untuk penyediaan kendaraan Anda dan kemampuan pengaturan otomatis melalui situs web sederhana. Mereka juga menerbitkan cloud yang tersedia untuk semua orang. Anda dapat memasok dan menyewakan hanya satu server atau banyak server web. Perusahaan Microsoft Pink dan Google segera mengikuti paket.
</p>
<p>Cloud Pribadi</p><p>

Sementara cloud komunitas mulai berkembang, peningkatan yang sama sedang diproduksi di area cloud individu. VMWare dan perusahaan Microsoft Hyper-V menawarkan kemampuan virtualisasi dan manajemen untuk memungkinkan suasana seperti Cloud di tempat. Penyediaan contoh, implementasi perangkat lunak berbasis desain, penambalan otomatis, pelacakan, jenis kinerja HA dan DR menjadi jadwal dan bagian dari inovasi teknologi virtualisasi. Direksi tidak harus merancang dan membangun lagi untuk kemampuan itu. Mereka harus melakukan jauh lebih sedikit, karena inovasi teknologi cloud alam memberi mereka kemampuan itu.

Teknologi seperti paket Microsoft Azure menyediakan inovasi teknologi Microsoft Azure untuk Anda jalankan di dalam pusat data Anda yang memungkinkan, kaya, layanan mandiri, solusi multi-tenant dan pertemuan yang dapat diandalkan dengan penyediaan cloud komunitas Microsoft. Microsoft Azure Pack menggabungkan dengan System Middle dan Microsoft windows Server untuk membantu menawarkan situs web swalayan untuk menangani solusi seperti situs web, Perangkat Virtual, dan Bus Layanan, situs web untuk administrator untuk menangani cloud sumber, web hosting scalable; dan lainnya.

</p>
                    </div>
                </article>

            </div>
        );
    }
}

export default Resume_content;