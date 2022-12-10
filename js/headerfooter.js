let pageHeader = `<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" width="100" alt=""></a>
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
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item submenu dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">Languages</a>
                <ul class="dropdown-menu">
                    <li class="nav-item"><a class="nav-link" href="index.html">English</a></li>
                    <li class="nav-item"><a class="nav-link" href="index-vn.html">Vietnamese</a></li>
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
    Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by Hy Vo | &copy; 2022-` + copyrightYear + ` <script>document.write(new Date().getFullYear());</script> | Inspired by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
</div>`;

document.getElementById("header").innerHTML = pageHeader;

document.getElementById("footer").innerHTML = pageFooter;