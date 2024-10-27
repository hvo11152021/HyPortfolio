let pageHeader_vn = `<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <a class="navbar-brand logo_h" href="index-vn.html"><img src="img/logo.png" width="100" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul class="nav navbar-nav menu_nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link" href="index-vn.html">Trang Chủ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about-vn.html">Bản Thân</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="portfolio-vn.html">Dự Án</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact-vn.html">Liên Lạc</a>
            </li>
            <li class="nav-item submenu dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">Ngôn Ngữ</a>
                <ul class="dropdown-menu">
                    <li class="nav-item"><a class="nav-link" href="index.html">Tiếng Anh</a></li>
                    <li class="nav-item"><a class="nav-link" href="index-vn.html">Tiếng Việt</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</nav>`;

let copyrightYear = new Date().getFullYear();

let pageFooter = `<div class="row justify-content-center">
<div class="col-lg-12">
    <div class="footer_top flex-column">
        <div class="footer_social">
            <a href="https://www.facebook.com/profile.php?id=100009867310233"><i class="fa fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/hy-vo-8a0843227/"><i class="fa fa-linkedin"></i></a>
        </div>
    </div>
</div>
</div>
<div class="row footer_bottom justify-content-center">
<p class="col-lg-8 col-sm-12 footer-text">
    &copy; 2022-` + copyrightYear + ` <script>document.write(new Date().getFullYear());</script> | Template by <a href="https://colorlib.com/wp/aigars-silkalns/" target="_blank">Aigars Silkalns</a>
</p>
</div>`;

document.getElementById("header-vn").innerHTML = pageHeader_vn;

document.getElementById("footer").innerHTML = pageFooter;