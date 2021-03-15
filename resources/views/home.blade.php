@include ('layouts.header')




<section id="dev-title-wrap" class="dev-title-wrap">
    <img src="{{ asset('images/backgrond-fullpage.png') }}" alt="" id="title-block-bg">
    <div class="container mobile-margin" >
        <div class="border-image-div">
            <img class="background-border-img-1" src="{{ asset('images/ramka1.png') }}" alt="">
            <img class="background-border-img-2" src="{{ asset('images/ramka2.png') }}" alt="">
            <img class="background-border-img-3" src="{{ asset('images/ramka3.png') }}" alt="">
        </div>
        <div class="text-block">
            <p>Деловые Люди</p>
            <p>Мы решим все проблемы нашего Клиента,<br>
                чтобы Вы могли сфокусироваться на бизнесе.</p>
            <input class="button-default main-block-button" type="submit" value="Хочу фокусироваться">
        </div>
    </div>
</section>

@include ('service.service')
@include ('about.about')
@include ("layouts.footer")
