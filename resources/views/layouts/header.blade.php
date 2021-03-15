<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#121926">
    <title>Dеловые Lюди</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/slick.css">
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css">
    <link rel="shortcut icon" href="images/favicon.png" type="image/png">
</head>
<header>
    <div class="header-top">
        <div class="container">
            <a class="logo-center"  href="/laravel/public"><img class="logo-image" src="images/logo.svg" alt=""></a>
            <div class="number-block">
                <a href="tel:+7(800) 444 31 41">8-800-444-31-41</a>
            </div>
        </div>
    </div>
    <div class="header-menu">
        <div class="header-menu-background">

        </div>
        <div class="container">
            <div class="header-menu-style">
            </div>
            <div id="header-menu">
                <div class="background-toggle-menu">

                    <div class="number-block-mobile">
                        <img class="favico-mobile" style="width: 0px;  transition: 0.1s"  src="{{asset("/images/favicon.png")}}" alt="">
                        <a href="tel:+7(800) 444 31 41">8-800-444-31-41<img class="mobile-phone-img" src="{{asset("/images/mobile-phone.png")}}" alt=""></a>

                    </div>
                </div>
                <div class="navbar-header">

                </div>
                <nav class="navbar navbar-expand-lg navbar-light  navbar-style-default">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a   class="nav-item nav-link" href="#full-service">Полный перечень услуг</a>
                            <a  class="nav-item nav-link" href="#about">Всё о нас</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
<div class="hunter-block-background  hidden">
    <div class="hunter-block">

    </div>
    <div class="hunter">
        <p>Оставьте заявку</p>
        <form method="post" id="form" >
            {{ csrf_field() }}
            <input type="text" name="DATA[NAME]" value="" placeholder="Ваше имя" required/><br />
            <input type="text" name="DATA[PHONE_WORK]" value="" placeholder="Телефон" required/><br />
            <input type="text" name="DATA[EMAIL_HOME]" value="" placeholder="E-mail" required/><br />
            <input type="text" name="DATA[TITLE]" value="" placeholder="Комментарий" required/><br />
            <input class="button-services form-button" type="submit" value="Хочу отдать вам все заботы!" />
        </form>
    </div>
</div>
