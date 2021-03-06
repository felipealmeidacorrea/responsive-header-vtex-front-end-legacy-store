//slick topbar
$(document).ready(function() {
    $('.fac-header__top-bar').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
    });
});
//end of slick topbar

// $(document).ready(function() {
//     $(".fac-desk-banners-home__banners .box-banner").addClass("slick-slide");
// });

window.addEventListener('DOMContentLoaded', function() {
    (function($) {
        $("main").css("display", "block");
    })(jQuery);
});

//slick destop banners
$(document).ready(function() {
    $('.fac-desk-banners-home .fac-desk-banners-home__banners').slick({
        lazyLoad: 'ondemand',
        waitForAnimate: false,
        autoplay: !0,
        autoplaySpeed: 4500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        zIndex: 0,
    });
});
//end of slick destop banners

//dropdown menu
function openNav() {
    document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.position = "fixed";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    //Overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";

};

function closeNav() {
    document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    //Overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("closeBtn").style.position = "inherit";
        document.getElementById("overlay").style.display = "none";
        //Reset Menus
        document.getElementById("main-container").style.animation = "";
        document.getElementById("main-container").style.transform = "translateX(0px)";
        document.getElementById("sub-container").style.animation = "";
        document.getElementById("sub-container").style.transform = "translateX(380px)";
    }, 300)
};

let firstDropdownOpen = false;

function firstDropDown() {
    firstDropdownOpen = !firstDropdownOpen;
    if (firstDropdownOpen) {
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#firstDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("firstContainer").style.display = "block";
        document.getElementById("firstContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.3s";
        document.getElementById("firstContainer").style.height = "410px";
    } else {
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#firstDropDown div").innerHTML = "Ver mais";
        //Handle Container
        document.getElementById("firstContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.2s";
        document.getElementById("firstContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("firstContainer").style.display = "none";
        }, 200)

    }
};

let secondDropDownOpen = false;

function secondDropDown() {
    secondDropDownOpen = !secondDropDownOpen;

    if (secondDropDownOpen) {
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#secondDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("secondContainer").style.display = "block";
        document.getElementById("secondContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.3s";
        document.getElementById("secondContainer").style.height = "260px";
    } else {
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#secondDropDown div").innerHTML = "Ver mais";
        //Handle Container
        document.getElementById("secondContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.2s";
        document.getElementById("secondContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("secondContainer").style.display = "none";
        }, 200)

    }
};

document.querySelectorAll(".sidenavRow").forEach(row => {
    row.addEventListener("click", () => {
        document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
        document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";
    });
});

document.getElementById("mainMenu").addEventListener("click", () => {
    document.getElementById("main-container").style.animation = "mainBack 0.3s forwards";
    document.getElementById("sub-container").style.animation = "subPush 0.3s forwards";
});

//subNavContent

function openDepCozinha() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Cozinha</div>
    <a href="#"><div class="sidenavContent">Porta-condimentos</div></a>
    <a href="#"><div class="sidenavContent">Potes e porta-mantimentos</div></a>
    <a href="#"><div class="sidenavContent">Marmitas</div></a>
    <a href="#"><div class="sidenavContent">Lou??as e talheres</div></a>
    <a href="#"><div class="sidenavContent">Sousplat e lugar americano</div></a>
    <a href="#"><div class="sidenavContent">Utens??lios de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Bandejas</div></a>
    <a href="#"><div class="sidenavContent">Ta??as e copos de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Suqueiras</div></a>
    <a href="#"><div class="sidenavContent">Jarras</div></a>
    <a href="#"><div class="sidenavContent">Tigelas</div></a>
    <div class="sidenavContentHeader">Caf?? e ch??</div>
    <a href="#"><div class="sidenavContent">Cafeteiras, bules e chaleiras</div></a>
    <a href="#"><div class="sidenavContent">Moedores, infusores e coadores</div></a>
    <a href="#"><div class="sidenavContent">Canecas, x??caras e copos t??rmicos</div></a>
    <a href="#"><div class="sidenavContent">Garrafas t??rmicas</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de caf?? e ch??</div></a>
    <div class="sidenavContentHeader">Copos e garrafas</div>
    <a href="#"><div class="sidenavContent">Garrafas inox</div></a>
    <a href="#"><div class="sidenavContent">Garrafas de pl??stico</div></a>
    <a href="#"><div class="sidenavContent">Copos</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de copos e garrafas</div></a>`;
};

function openDepDecoracao() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Decora????o</div>
    <a href="#"><div class="sidenavContent">Pap??is de parede</div></a>
    <a href="#"><div class="sidenavContent">Quadros, placas e porta-retratos</div></a>
    <a href="#"><div class="sidenavContent">Espelhos</div></a>
    <a href="#"><div class="sidenavContent">Pe??as decorativas</div></a>
    <a href="#"><div class="sidenavContent">Lumin??rias</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de decora????o</div></a>
    <div class="sidenavContentHeader">Rel??gios</div>
    <a href="#"><div class="sidenavContent">Rel??gios de parede</div></a>
    <a href="#"><div class="sidenavContent">Rel??gios de mesa</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de rel??gios</div></a>`;
};

function openDepUtilidades() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Utilidades e acess??rios</div>
    <a href="#"><div class="sidenavContent">Utilidades e acess??rios manuais</div></a>
    <a href="#"><div class="sidenavContent">Utilidades e acess??rios eletr??nicos</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de limpeza</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de utilidades e acess??rios</div></a>`;
};

function openDepOrganizacao() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Organiza????o</div>
    <a href="#"><div class="sidenavContent">Prateleiras, organizadores e divis??rias</div></a>
    <a href="#"><div class="sidenavContent">Caixas e cestas</div></a>
    <a href="#"><div class="sidenavContent">Ganchos e suportes</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de organiza????o</div></a>`;
};

function openDepInfantil() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Infantil e beb??s</div>
    <a href="#"><div class="sidenavContent">Ve??culos de brinquedo</div></a>
    <a href="#"><div class="sidenavContent">Conjuntos</div></a>
    <a href="#"><div class="sidenavContent">Bonecas e bonecos</div></a>
    <a href="#"><div class="sidenavContent">Piscina</div></a>
    <a href="#"><div class="sidenavContent">Fantasias</div></a>
    <a href="#"><div class="sidenavContent">Armas de brinquedo</div></a>
    <a href="#"><div class="sidenavContent">Bolas e atividade f??sica</div></a>
    <a href="#"><div class="sidenavContent">Livros infantis</div></a>
    <a href="#"><div class="sidenavContent">Bicicletas, patinetes e triciclos</div></a>
    <a href="#"><div class="sidenavContent">Outros itens infantis</div></a>`;
};

function openDepCama() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Quarto e sala</div>
    <a href="#"><div class="sidenavContent">Tapetes</div></a>
    <a href="#"><div class="sidenavContent">Almofadas</div></a>
    <a href="#"><div class="sidenavContent">Capas</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de quarto e sala</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de quarto e sala</div></a>
    <div class="sidenavContentHeader">Incensos, velas e aromatizantes</div>
    <a href="#"><div class="sidenavContent">Incensos e incens??rios</div></a>
    <a href="#"><div class="sidenavContent">Velas</div></a>
    <a href="#"><div class="sidenavContent">Difusores</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de aromatizantes</div></a>
    <div class="sidenavContentHeader">Banho</div>
    <a href="#"><div class="sidenavContent">Toalhas</div></a>
    <a href="#"><div class="sidenavContent">Ganchos e prateleiras de banho</div></a>
    <a href="#"><div class="sidenavContent">Lixeiras</div></a>
    <a href="#"><div class="sidenavContent">Tapetes de banheiro</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de banho</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de banho</div></a>`;
};

function openDepFloricultura() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Floricultura e jardim</div>
    <a href="#"><div class="sidenavContent">Vasos e cachepots</div></a>
    <a href="#"><div class="sidenavContent">Plantas e flores decorativas</div></a>
    <a href="#"><div class="sidenavContent">Ornamentos de floricultura e jardim</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de floricultura e jardim</div></a>`;
};

function openDepBar() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Bar</div>
    <a href="#"><div class="sidenavContent">Copos, ta??as e canecas de bar</div></a>
    <a href="#"><div class="sidenavContent">Baldes de bar</div></a>
    <a href="#"><div class="sidenavContent">Coqueteleiras</div></a>
    <a href="#"><div class="sidenavContent">Jogos de bar</div></a>
    <a href="#"><div class="sidenavContent">Vinho</div></a>
    <a href="#"><div class="sidenavContent">Decora????o de bar</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de bar</div></a>`;
};

function openDepPapelaria() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Papelaria</div>
    <a href="#"><div class="sidenavContent">Quadros de recado e planejamento</div></a>
    <a href="#"><div class="sidenavContent">Agendas, planners e blocos de anota????o</div></a>
    <a href="#"><div class="sidenavContent">Canetas, l??pis, pinc??is e marca-texto</div></a>
    <a href="#"><div class="sidenavContent">Porta-canetas e objetos</div></a>
    <a href="#"><div class="sidenavContent">Globos terrestres</div></a>
    <a href="#"><div class="sidenavContent">Estojos</div></a>
    <a href="#"><div class="sidenavContent">Bolsa/Mochila escolar</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de papelaria</div></a>
    <div class="sidenavContentHeader">Livros</div>
    <a href="#"><div class="sidenavContent">Livros</div></a>`;
};

function openDepMoveis() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">M??veis</div>
    <a href="#"><div class="sidenavContent">Pufes</div></a>
    <a href="#"><div class="sidenavContent">Ba??s</div></a>
    <a href="#"><div class="sidenavContent">Arm??rios e cabideiros de ch??o</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de m??veis</div></a>
    <a href="#"><div class="sidenavContent">Mesas de varanda</div></a>`;
};

function openDepBolsas() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Bolsas e necessaires</div>
    <a href="#"><div class="sidenavContent">Bolsas e mochilas</div></a>
    <a href="#"><div class="sidenavContent">Bolsas t??rmicas</div></a>
    <a href="#"><div class="sidenavContent">Necessaires e porta-moedas</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de bolsas e necessaires</div></a>`;
};

function openDepJogos() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Jogos</div>
    <a href="#"><div class="sidenavContent">Jogos de mesa</div></a>
    <a href="#"><div class="sidenavContent">Jogos diversos</div></a>`;
};
//end of dropdown menu

//busca mobile
function openBuscaMobile() {
    document.getElementsByClassName("fac-header__main-content-desktop")[0].style.display = "flex";
    document.getElementsByClassName("fac-header__main-content-desktop")[0].style.position = "fixed";
    document.getElementsByClassName("fac-header__main-content-desktop")[0].style.width = "calc(100% - 20px)";
    document.getElementsByClassName("fac-header__main-content-desktop__search")[0].style.width = "100%";
    document.getElementsByClassName("fulltext-search-box")[0].style.fontSize = "16px";
    document.getElementsByClassName("fac-header__main-content__menu-desktop")[0].style.display = "none";
    document.getElementById("fac-header__main-content-desktop__logo").style.display = "none";
    document.getElementById("busca-mobile__overlay").style.display = "block";
    document.getElementsByClassName("busca")[0].style.width = "100%";
    document.getElementsByClassName("busca")[0].style.height = "50px";

};

function closeBuscaMobile() {
    document.getElementsByClassName("fac-header__main-content-desktop")[0].style.display = "none";
};
//end of busca mobile