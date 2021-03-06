<?php

$root = "";

if (isset($_GET["url"])) {
    $url = explode("/", filter_var(trim($_GET["url"], "/")));
    $level = count($url);

    while ($level > 1) {
        $root = $root . "../";
        $level--;
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <title>Home</title>
    <style>
        p.lead {
            padding-top: 20px;
            font-weight: 400;
            line-height: 40px;
        }
        h5 {
            padding-top: 20px; 
            line-height: 30px;
        } 
    </style> 
</head>
<body>
    <div class="navbar-part">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#"><img src="<?= $root . "public/imgs/logo.png" ?>" alt="" width="60px" height="40px"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">

                <?php
                if (isset($_SESSION["loggedIn"])) {
                ?>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="<?= $root . "Home/Intro" ?>">Home</a>
                    </li>
                    <?php
                    if ($_SESSION["permission"] == 4) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $root . "Home/Order" ?>">T???o ????n h??ng</a>
                    </li>
                    <?php
                    }
                    if ($_SESSION["permission"] == 3) { ?>
                    <li>
                        <a class="nav-link" href="<?= $root . "Home/ProcessOrder" ?>">X??? l?? ????n h??ng</a>
                    </li>
                    <?php
                    }
                    if ($_SESSION["permission"] == 2) { ?>
                    <li>
                        <a class="nav-link" href="<?= $root . "Home/StockManagement" ?>">Qu???n l?? kho</a>
                    </li>
                    <?php
                    }
                    if ($_SESSION["permission"] == 1) { ?>
                    <li>
                        <a class="nav-link" href="<?= $root . "Home/EmployerManagement" ?>">Qu???n l?? t??i kho???n</a>
                    </li>
                    <?php
                    }
                    ?>

                </ul>

                <?php
                }

                if (!isset($_SESSION["loggedIn"])) {
                ?>
                <div class="mt-2 mt-md-0 ml-auto">
                    <a href="<?= $root . "Account/Login" ?>" class="font-weight-bold text-light btn btn-outline-primary my-2 my-sm-0" role="button">Login</a>
                    <a href="<?= $root . "Account/Register" ?>" class="font-weight-bold text-light btn btn-outline-success my-2 my-sm-0 ml-3" role="button">Register</a>
                </div>

                <?php
                } else { ?>

                <div class="mt-2 mt-md-0 ml-auto">
                    <a href="<?= $root . "Account/Logout" ?>" class="font-weight-bold text-light btn btn-outline-primary my-2 my-sm-0" role="button">Logout</a>
                </div>

                <?php
                }
                ?>

            </div>
        </nav>
    </div>

    <div class="carousel-part mb-4">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="<?= $root . "public/imgs/image1.jpg" ?>" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?= $root . "public/imgs/image2.jpg" ?>" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?= $root . "public/imgs/image3.jpg" ?>" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>

    <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row py-4">
            <div class="col-lg-4 text-center mb-4">
                <img class="rounded-circle" src="<?= $root . "public/imgs/icon1.jpg" ?>" alt="Generic placeholder image" width="140" height="140">
                <h5>Top c??ng ty giao <br> nh???n h??ng ?????u VN</h5>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4 text-center mb-4">
                <img class="rounded-circle" src="<?= $root . "public/imgs/icon2.jpg" ?>" alt="Generic placeholder image" width="140" height="140">
                <h5>Giao h??ng nhanh <br> T??? l??? ho??n h??ng th???p</h5> 
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4 text-center mb-4">
                <img class="rounded-circle" src="<?= $root . "public/imgs/icon3.jpg" ?>" alt="Generic placeholder image" width="180" height="140">
                <h5>M???ng l?????i ph??? s??ng <br> 100% 63 t???nh th??nh</h5>
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->


        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">
        <div class="row featurette py-5 px-1">
            <div class="col-md-6">
                <h2 class="featurette-heading"><span class="text-muted">| C??u chuy???n GHN</span></h2>
                <p class="lead">C??ng ty giao nh???n ?????u ti??n t???i Vi???t Nam ???????c th??nh l???p n??m 2012, v???i s??? m???nh ph???c v??? nhu c???u v???n chuy???n chuy??n nghi???p c???a c??c ?????i t??c Th????ng m???i ??i???n t??? tr??n to??n qu???c. GHN cam k???t mang ?????n cho kh??ch h??ng nh???ng tr???i nghi???m d???ch v??? giao nh???n nhanh, an to??n, hi???u qu??? gi??p ng?????i b??n h??ng b??n ???????c nhi???u h??n, ng?????i mua h??ng h??i l??ng h??n.</p>
            </div>
            <div class="col-md-6">
                <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="<?= $root . "public/imgs/image4.jpg" ?>" data-holder-rendered="true" style="width: 500px; height: 500px;">
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette py-5 px-1">
            <div class="col-md-6 order-md-2">
                <h2 class="featurette-heading"><span class="text-muted">| Th??nh t??ch n???i b???t</span></h2>
                <p class="lead">
                    GHN lu??n d??nh tr???n t??m huy???t ????? mang ?????n nh???ng d???ch v??? giao nh???n xu???t s???c nh???t. Ni???m ??am m?? ch???t l?????ng ???? gi??p GHN ?????t ???????c nh???ng th??nh t??ch ????ng kinh ng???c trong su???t 8 n??m qua: <br>
                    - 10.000.000 ????n h??ng ???????c giao th??nh c??ng m???i th??ng <br>
                    - H??n 100.000 shop online v?? doanh nghi???p ???? tin d??ng <br>
                    - ?????i t??c chi???n l?????c c???a Tiki, Shopee, Lazada, Sendo <br>
                    - M???ng l?????i giao nh???n ph??? s??ng 100% 63 t???nh th??nh <br>
                    - ?????t t???c ????? x??? l?? 500.000 ????n h??ng/ ng??y
                </p>
            </div>
            <div class="col-md-6 order-md-1">
                <img class="featurette-image img-fluid mx-auto" src="<?= $root . "public/imgs/image5.jpg" ?>" alt="500x500" data-holder-rendered="true" style="width: 1000px; height: 500px;">
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette py-5 px-1">
            <div class="col-md-7">
                <h2 class="featurette-heading"><span class="text-muted">| ?????i t??c c???a GHN</span></h2>
                <p class="lead">
                    H??n 100.000 kh??ch h??ng ???? tin d??ng d???ch v???, GHN mang ?????n ch???t l?????ng d???ch v??? giao h??ng t???t nh???t cho kh??ch h??ng. <br>
                    Ch??ng t??i cam k???t ph???c v??? m???t c??ch trung th???c v?? c?? tr??ch nhi???m ?????i v???i t???ng ????n h??ng c???a kh??ch h??ng.
                </p>
            </div>
            <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="<?= $root . "public/imgs/image6.jpg" ?>" data-holder-rendered="true" style="width: 500px; height: 500px;">
            </div>
        </div>

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->
        <footer class="container">
            <p>??Ton Duc Thang University.</p>
        </footer>

    </div>

    </div>


</body>
</html>