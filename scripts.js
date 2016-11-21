function AddCart1(e, t) {
    $("span.cart-scroll.count-cart").hide();
    var a = parseInt($("span.notify-right.count-cart").html()),
        o = {
            type: "POST",
            url: "/cart/add.js",
            data: "quantity=" + t + "&variantId=" + e,
            dataType: "json",
            success: function() {
                var e = a + parseInt(t);
                $("span.notify-right.count-cart").html(e), $("span.cart-scroll.count-cart").html(e).show(), $(".addcart-popup").addClass("active"), $(window).width() < 768 && (window.location.href = "/cart")
            },
            error: function() {
                alert("Đã có lỗi xảy ra, vui lòng thao tác lại...")
            }
        };
    jQuery.ajax(o)
}
function getAjaxProduct(e, t, a) {
}
function getAjaxProduct1(e, t, a) {
    if (null != e && "" != e) {
        var o = $(".option3 .wrap_loading").clone(),
            n = "/" + e + "?view=" + a,
            i = $(t).find("ul.product-list").children().length;
        0 == i && jQuery.ajax({
            url: n,
            type: "GET",
            data: {},
            dataType: "html",
            beforeSend: function() {
                $(t).parents(".ajax-box-load").append(o), $(window).width() > 1199 && $(this).parents(".deal-ajax-load").hasClass("hot-deals-row") ? $(t).parents(".ajax-box-load").find(".wrap_loading").css("width", $(t).parents(".ajax-box-load").width() - $(t).parents(".ajax-box-load").find(".width-load").width() + "px") : $(window).width() > 991 && $(t).parents(".ajax-box-load").find(".wrap_loading").css("width", $(t).parents(".ajax-box-load").width() - $(t).parents(".ajax-box-load").find(".width-load").width() + "px"), $(t).parents(".ajax-box-load").find(".wrap_loading").show()
            },
            complete: function(e) {
                $(t).find("ul.product-list").html(e.responseText), $(t).find("ul.product-list iframe").remove(), $(t).find("ul.product-list").owlCarousel({
                    items: 4,
                    autoPlay: !1,
                    addClassActive: !0,
                    navigation: !0,
                    responsive: !0,
                    slideSpeed: 1e3,
                    paginationSpeed: 1e3,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [979, 4],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [450, 2],
                    itemsMobile: [370, 1]
                }), $(t).parents(".ajax-box-load").find(".wrap_loading").remove()
            }
        })
    }
}! function(e) {
    "use strict";

    function t() {
        var t = parseInt(e(".container").innerWidth()),
            a = parseInt(e(".vertical-menu-content").actual("width")),
            o = parseInt(e(".header-banner").actual("width"));
        e(".vertical-menu-content").find(".vertical-dropdown-menu").each(function() {
            e(window).width() > 1199 ? e(this).width(t - (a + o) - 2) : e(this).width(t - a - 2)
        })
    }

    function a() {
        var t = parseInt(e(".container").innerWidth()),
            a = parseInt(e(".vertical-menu-content").actual("width")),
            o = parseInt(e(".header-banner").actual("width")),
            n = e(".nav-top-menu").hasClass("un-home");
        n && (o = 190), e(".vertical-menu-content.sidebar-scroll").find(".vertical-dropdown-menu").each(function() {
            if (e(window).width() > 1199) {
                e(this).width(t - a - 2), e(this).find(".vertical-groups").width(t - (a + o) - 2), e(this).find(".product-add").width(o).removeClass("hidden");
                var n = e(".homeslider .content-slide").height();
                e(".product-add .list-add").each(function() {
                    n > 0 ? e(this).height(n / 2 - 2) : e(this).css("height", "240px")
                })
            }
        })
    }

    function o() {
        var t = parseInt(e(window).width());
        768 > t && (e("#nav-top-menu").removeClass("nav-ontop"), e("body").hasClass("home") && (t > 1024 ? e("#nav-top-menu").find(".vertical-menu-content").show() : e("#nav-top-menu").find(".vertical-menu-content").hide()), e("#shopping-cart-box-ontop .cart-block").appendTo("#cart-block"), e("#shopping-cart-box-ontop").fadeOut(), e("#user-info-opntop #user-info-top").appendTo(".top-header .container"), e("#form-search-opntop form").appendTo("#header .header-search-box"))
    }
    e(document).ready(function() {
        
e("ul.product-list").owlCarousel({
                    items: 4,
                    autoPlay: !1,
                    addClassActive: !0,
                    navigation: !0,
                    responsive: !0,
                    slideSpeed: 1e3,
                    paginationSpeed: 1e3,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [979, 4],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [450, 2],
                    itemsMobile: [370, 1]
}),
        e(".owl-main-slider").owlCarousel({
            items: 1,
            autoPlay: !1,
            navigation: !0,
            slideSpeed: 1e3,
            paginationSpeed: 1e3,
            responsive: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: [450, 1],
            itemsMobile: [370, 1]
        }), e(".trending-product").owlCarousel({
            items: 1,
            autoPlay: !1,
            navigation: !0,
            slideSpeed: 1e3,
            paginationSpeed: 1e3,
            responsive: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: [450, 1],
            itemsMobile: [370, 1]
        }), e(".list-item-article").owlCarousel({
            items: 4,
            autoPlay: !1,
            lazyLoad: !0,
            addClassActive: !0,
            navigation: !0,
            slideSpeed: 1e3,
            paginationSpeed: 1e3,
            responsive: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 3],
            itemsTabletSmall: [450, 2],
            itemsMobile: [370, 1]
        }), e(".related-product ul.product-list").owlCarousel({
            items: 4,
            autoPlay: !1,
            lazyLoad: !0,
            addClassActive: !0,
            navigation: !0,
            slideSpeed: 1e3,
            paginationSpeed: 1e3,
            responsive: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 3],
            itemsTabletSmall: [450, 2],
            itemsMobile: [370, 2]
        })
    }), jQuery(document).on("click", ".overlay, .continue-shopping, .close-window", function() {
        jQuery(".addcart-popup").removeClass("active"), jQuery(".soldout-popup").removeClass("active"), jQuery(".like-popup").removeClass("active")
    }), e(window).load(function() {
        t(), a()
    }), e(document).ready(function() {
        e(".option3 .box-vertical-megamenus .vertical-menu-list>li").mouseover(function() {
            e(this).find(".mega-loader").delay(500).fadeOut()
        }), e('[data-toggle="tooltip"]').tooltip(), e("#product-zoom").length > 0 && e("#product-zoom").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750,
            gallery: "gallery_01"
        }), e(".select-category").select2(), e(document).on("click", ".toggle-menu", function() {
            return e(this).closest(".nav-menu").find(".navbar-collapse").toggle(), !1
        }), e(document).on("click", "a.btn-elevator", function(t) {
            t.preventDefault();
            var a = this.hash;
            if (e(document).find(a).length <= 0) return !1;
            var o = e(a);
            return e("html, body").stop().animate({
                scrollTop: o.offset().top - 50
            }, 500), !1
        }), e(document).on("click", ".scroll_top", function() {
            return e("body,html").animate({
                scrollTop: 0
            }, 400), !1
        }), e(document).on("click", ".vertical-megamenus-ontop-bar", function() {
            return e("#vertical-megamenus-ontop").find(".box-vertical-megamenus").slideToggle(), e("#vertical-megamenus-ontop").toggleClass("active"), !1
        }), e(document).on("click", ".display-product-option .view-as-grid", function() {
            return e(this).closest(".display-product-option").find("li").removeClass("selected"), e(this).addClass("selected"), e(this).closest("#view-product-list").find(".product-list").removeClass("list").addClass("grid"), !1
        }), e(document).on("click", ".display-product-option .view-as-list", function() {
            return e(this).closest(".display-product-option").find("li").removeClass("selected"), e(this).addClass("selected"), e(this).closest("#view-product-list").find(".product-list").removeClass("grid").addClass("list"), !1
        }), e(document).on("click", ".tree-menu li span", function() {
            return e(this).closest("li").children("ul").slideToggle(), e(this).closest("li").haschildren("ul") && e(this).toggleClass("open"), !1
        }), e(document).on("click", "*", function(t) {
            var a = e("#box-vertical-megamenus");
            if (!a.is(t.target) && 0 === a.has(t.target).length) {
                if (e("body").hasClass("home") && !e("#nav-top-menu").hasClass("nav-ontop")) return;
                a.find(".vertical-menu-content").hide(), a.find(".title").removeClass("active")
            }
        })
    }), e(window).resize(function() {
        t(), o(), a()
    }), e(window).on("load resize", function() {
        var t = e(".homeslider .content-slide").height();
        t > 0 ? (e(".vertical-dropdown-menu").height(t - 2), e(".product-add").height(t - 2)) : (e(".vertical-dropdown-menu").css("height", "480px"), e(".product-add").css("height", "480px"))
    }), e(document).on("click", ".vertical-megamenus-ontop-bar", function() {
        return e("#vertical-megamenus-ontop").find(".box-vertical-megamenus").slideToggle(), e("#vertical-megamenus-ontop").toggleClass("active"), !1
    }), e(window).scroll(function() {
        0 == e(window).scrollTop() ? e(".scroll_top").stop(!1, !0).fadeOut(600) : e(".scroll_top").stop(!1, !0).fadeIn(600);
        var o = e(window).scrollTop(),
            n = e("#header").height() + e("#top-banner").height(),
            i = e(window).width(),
            s = e("#home-slider").innerHeight();
        0 == s ? 480 : e("#home-slider").innerHeight();
        var l = e(".nav-top-menu").hasClass("in-home");
        i > 767 && (o > n + s ? (e("#nav-top-menu").addClass("nav-ontop"), e(".vertical-menu-content").addClass("sidebar-scroll"), e("#cart-block .cart-block").appendTo("#shopping-cart-box-ontop .shopping-cart-box-ontop-content"), e("#shopping-cart-box-ontop").fadeIn(), e("#user-info-top").appendTo("#user-info-opntop"), e("#header .header-search-box form").appendTo("#form-search-opntop"), l && a()) : (t(), e("#nav-top-menu").removeClass("nav-ontop"), e(".vertical-menu-content").removeClass("sidebar-scroll"), e("body").hasClass("home") && (e("#nav-top-menu").find(".vertical-menu-content").removeAttr("style"), i > 1024 ? e("#nav-top-menu").find(".vertical-menu-content").show() : e("#nav-top-menu").find(".vertical-menu-content").hide(), e("#nav-top-menu").find(".vertical-menu-content").removeAttr("style")), e("#shopping-cart-box-ontop .cart-block").appendTo("#cart-block"), e("#shopping-cart-box-ontop").fadeOut(), e("#user-info-opntop #user-info-top").appendTo(".top-header .container"), e("#form-search-opntop form").appendTo("#header .header-search-box"), l && e(".product-add").addClass("hidden")))
    }), e("#box-vertical-megamenus .box-vertical-megamenus").innerHeight()
}(jQuery), jQuery(document).on("click", ".add-zo-cart", function() {
    var e = $(this).attr("data-alias"),
        t = 1;
    AddCart(e, t)
}), jQuery("body").on("click", ".soldout-add", function() {
    jQuery(".soldout-popup").addClass("active")
}), jQuery("body").on("click", ".like-btn", function() {
    jQuery(".like-popup").addClass("active")
}), jQuery("#footer2").on("click", ".clickdown", function() {
    $(this).parent().toggleClass("open").next().slideToggle()
}), $(document).ready(function() {
    $(".ajax-box-load").each(function() {
        $(this).find("ul.nav-tab li:first-child").addClass("active");
        var e = $(this).find("ul.nav-tab li:first-child a").attr("href"),
            t = $(this).find("ul.nav-tab li:first-child").attr("data-alias"),
            a = $(this).parents(".deal-ajax-load").data("view");
        $(e).addClass("active"), getAjaxProduct(t, e, a)
    }), $(".ajax-box-load ul.nav-tab li a").click(function() {
        var e = $(this).attr("href"),
            t = $(this).parent().data("alias"),
            a = $(this).parents(".deal-ajax-load").data("view");
        getAjaxProduct(t, e, a)
    })
});
