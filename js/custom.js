$(
  (function () {
    "use strict";

    /*--------------------------------
   Start Preloader Animation
  ----------------------------------*/
    $(window).on("load", function () {
      $(".loader").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
      $("body").delay(350).css({
        overflow: "visible",
      });
      $(".all-container").css({
        opacity: "1",
      });
    });
    /*--------------------------------
      End Preloader Animation
    ----------------------------------*/

    /*--------------------------------
   Start Smooth Scrolling
  ----------------------------------*/
    function smoothScroll() {
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on("click", function (event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $("html, body").animate(
                {
                  scrollTop: target.offset().top,
                },
                1000,
                "easeInOutExpo",
                function () {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) {
                    // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  }
                }
              );
            }
          }
        });
      jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
          if (t == 0) return b;
          if (t == d) return b + c;
          if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
          return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
        },
      });
    }
    // Applying Smooth Scroll When The Browser Is Not Opera Mini Or UC Browser
    if (
      navigator.userAgent.indexOf("Opera Mini") == -1 ||
      navigator.userAgent.indexOf("UCBrowser") != -1
    ) {
      smoothScroll();
    }
    /*--------------------------------
      End Smooth Scrolling
  ----------------------------------*/

    /*--------------------------------
   Start Header
    ----------------------------------*/
    // Initiating Background Slider
    var backgroundSlide = $("#background-slide");
    backgroundSlide.owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      animateOut: "fadeOut",
    });
    $(".slider-prev-button").on("click", function () {
      backgroundSlide.trigger("prev.owl.carousel");
    });
    $(".slider-next-button").on("click", function () {
      backgroundSlide.trigger("next.owl.carousel");
    });
    // Setting Up Background Images
    function SliderBackground() {
      if ($(".owl-full-width .slider").length) {
        $(".owl-full-width .slider").each(function () {
          var $this = $(this);
          var img = $this.children(img);
          var imgSrc = img.attr("src");
          $this.css({
            backgroundImage: "url(" + imgSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          });
        });
      }
    }
    // Initializing Background Setting Function
    SliderBackground();
    // Toggle Fullscreen Navigation
    $("#burger").on("click", function () {
      $(".fullscreen-nav-container").slideToggle(300);
    });
    $(".fullscreen-nav-holder a, .turn-home").on("click", function () {
      $("#burger").trigger("click");
    });
    /*--------------------------------
     End Header
  ----------------------------------*/

    /*--------------------------------
  Start Menu
    ----------------------------------*/
    // Highlighting Menu on Scroll Through Sections
    $(window).on("scroll", function () {
      $("section").each(function () {
        if ($(window).scrollTop() + 50 >= $(this).offset().top) {
          var id = $(this).attr("id");
          $(".menu-item").removeClass("active");
          $(".menu-item." + id).addClass("active");
          $(".mobile-menu-item").removeClass("active");
          $(".mobile-menu-item." + id).addClass("active");
        }
      });
    });

    // Styling Menu on Scroll
    $(".about-me").waypoint({
      handler: function (direction) {
        // Fixing Menu after leaving Header Section
        $(".menu").toggleClass("menu-fix");
        // Changing Menu background after leaving Header Section
        $(".menu-container").toggleClass("menu-normal");
        $(".menu-item").toggleClass("menu-item-transparent");
        $(".desktop-menu .hvr-underline-from-left").toggleClass("dark");
        // Toggling Mobile Menu Visibility
        $(".mobile-menu").toggleClass("mobile-menu-fix");
        // Auto-Collapsing Mobile Menu When Left Open
        var a = $(".menu-link").attr("class");
        if (direction == "up" && a == "menu-link active") {
          $(".menu-link").trigger("click");
        }
      },
    });

    // Toggle Mobile Menu
    $(".mobile-menu a").on("click", function () {
      $(".menu-link").toggleClass("active");
      $(".menu-slider").slideToggle(500);
    });
    /*--------------------------------
  		 End Menu
    ----------------------------------*/

    /*--------------------------------
      Start About Me
  ----------------------------------*/
    // Initializing Skillbar Animation
    $(".skill h3").waypoint({
      handler: function (direction) {
        if (direction == "up") {
          $(".skillbar").each(function () {
            $(this).find(".skillbar-bar").css("width", "0");
          });
        } else if (direction == "down") {
          $(".skillbar").each(function () {
            $(this)
              .find(".skillbar-bar")
              .animate(
                {
                  width: jQuery(this).attr("data-percent"),
                },
                2000
              );
          });
        }
      },
      offset: "bottom-in-view",
    });
    /*--------------------------------
      End About Me
  ----------------------------------*/

    /*--------------------------------
       Start Portfolio
  ----------------------------------*/
    // Initialize filterizr Plugin
    // var filterizd = $('.filtr-container').filterizr();

    // // Styling of Filter Controls
    // $(".portfolio-navigation li").on("click", function () {
    //   $(".portfolio-navigation li").removeClass("active");
    //   $(this).addClass("active");
    // });

    // Initialize MagnificPopup Plugin
    // $(".filtr-container").magnificPopup({
    //   type: "iframe",
    //   delegate: "a",
    //   gallery: {
    //     enabled: true,
    //   },
    //   zoom: {
    //     enabled: true,
    //     duration: 300,
    //     easing: "ease-in-out",
    //   },
    // });
    // $(".filtrr-container").magnificPopup({
    //   type: "image",
    //   delegate: "a",
    //   gallery: {
    //     enabled: true,
    //   },
    //   zoom: {
    //     enabled: true,
    //     duration: 300,
    //     easing: "ease-in-out",
    //   },
    // });

    // Galley Shuffle When Scrolled Down
    // $('.services').waypoint({
    //   handler: function (direction) {
    //     if (direction == "down") {
    //       filterizd.filterizr('shuffle');
    //     }
    //   },
    //   offset: "bottom-in-view"
    // });

    // image loader
    $("#container").imagesLoaded(function () {});

    // load more button

    /*--------------------------------
       End Portfolio
  ----------------------------------*/

    /*--------------------------------
       Start Testimonials
  ----------------------------------*/
    // Configure and Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
    });

    // Configuring Fun-Facts Counter
    var work = new CountUp("work", 0, 220, 0, 4);
    var happyClient = new CountUp("happy-client", 0, 50, 0, 4);
    var projects = new CountUp("projects", 0, 200, 0, 4);
    var coffee = new CountUp("coffee", 0, 100, 0, 4);

    // Initializing Fun-Fact Counter
    $(".fun-facts").waypoint({
      handler: function (direction) {
        work.start();
        happyClient.start();
        projects.start();
        coffee.start();
      },
      offset: "bottom-in-view",
    });
    /*--------------------------------
      End Testimonials
  ----------------------------------*/

    /*--------------------------------
      Start Code for Mobile Devices
  ----------------------------------*/
    // Code for Opera Mini
    var vh = $(window).height();
    if (navigator.userAgent.indexOf("Opera Mini") != -1) {
      // Setting Fun Facts Value Immediately
      work.start();
      happyClient.start();
      projects.start();
      coffee.start();
      // Setting Skillbar Value Immediately
      $(".skillbar").each(function () {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            0
          );
      });
      // Removing Bootstrap Class and Re-Style Input
      $("input").removeClass("form-control");
      $("input").css({
        width: "100%",
        height: "50px",
        background: "#fff",
      });
      // Removing Full-Screen Nav
      $(".navigation-icon").css("display", "none");
    }

    // Code For UC Browser
    if (navigator.userAgent.indexOf("UCBrowser") != -1) {
      // Removing Full-Screen Nav
      $(".navigation-icon").css("display", "none");
      $(".fun-facts").css({
        display: "table",
        margin: "auto",
      });
      // Setting Fun Facts Value Immediately
      work.start();
      happyClient.start();
      projects.start();
      coffee.start();
      // Setting Skillbar Value Immediately
      $(".skillbar").each(function () {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            0
          );
      });
    }
    /*--------------------------------
      End Code for Mobile Devices
  ----------------------------------*/

    /*--------------------------------
      Others
  ----------------------------------*/
    // Code for Internet Explorer
    if (
      navigator.appName == "Microsoft Internet Explorer" ||
      !!(
        navigator.userAgent.match(/Trident/) ||
        navigator.userAgent.match(/rv:11/)
      ) ||
      (typeof $.browser !== "undefined" && $.browser.msie == 1)
    ) {
      $(".header, .fullscreen-nav-container, .like-me, .contact").css(
        "background-attachment",
        "scroll"
      );
      $(".fullscreen-nav-holder").css("width", "100vw");
    }

    // Wow Plugin Initialization
    var wow = new WOW({
      animateClass: "animated",
      offset: 70,
      mobile: false,
    });
    wow.init();

    // Toggling Visibility of Scroll Up Button
    $(".about-me-images").waypoint({
      handler: function (direction) {
        $(".scroll-up").toggleClass("scroll-up-show");
      },
      offset: "bottom-in-view",
    });
    $(".sub-button").waypoint({
      handler: function (direction) {
        $(".scroll-up").toggleClass("scroll-up-show");
      },
      offset: "bottom-in-view",
    });
    /*--------------------------------
      Others
  ----------------------------------*/
  })(jQuery)
);

$("#gForm").submit(function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var form = $(this);
  var url = form.attr("action");
  if ($("#name").val() === "" || $("#email").val() === "") {
    return $("#name").val();
  } else {
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function (response) {
        console.log(response);
        if (response.result === "success") {
          $("#messageS").empty();
          $("#messageS").append(
            "<em>Thanks</em> for contacting!<br> Will get back to you soon!"
          );
          $("#modalButton").click();
          $("#reset-btn").click();
        } else {
          $("#messageS").empty();
          $("#messageS").append("Not Submitted <br> Try again");
          $("#modalButton").click();
          $("#reset-btn").click();
        }
      },
    });
  }
});

if (window.matchMedia("(max-width: 600px)").matches) {
  console.log("yep");
  $("#111").empty();
  $("#111")
    .append(`<div class="col-lg-5 col-md-6 col-sm-6 col-12 filtr-item filtr-container mt-4 pt-2" >
  <div class="item-holder">
    <a href="https://drive.google.com/file/d/1lDF_z-e-HgMXucckjW6B5hOgsXL8C1ZI/view?usp=sharing" title="Meme Hub">
    <img src="images/Projects/Screenshot (223).png" alt="item2">
      <div class="item-caption">
        <h2>Meme Hub <br></h2>
        <p>Click here <br><small>to Check out the description video</small></p>
        <div class="item-created">Nov 2019</div>
      </div>
    </a>
  </div>
  <div class="col-lg-7 col-md-6 col-sm-6 col-12 mt-4 text center" >
    <div class="item-holder">
      <h3 class="mt-4 text-secondary"><b>MEME HUB</b>, AttainU — First Full Stack project </h3>
      <p>Meme-Hub is a social media platform, primarily used for sharing memes, giving a glimpse of 9gag.</br> 
      <a href="https://github.com/attainu/eagle-supreme-meme/tree/final" class="text-secondary"><img src="images/Icons/github-image.png" style="height: 20px; width: auto;       margin-bottom: 4px;" > GitHub Repository</a>
      <br><a href="http://meme-hub-6.herokuapp.com/" class="text-secondary"><img src="images/Icons/www.png" style="height: 20px; width: auto; margin-bottom: 4px;" >  Project Live Demo | http://meme-hub-6.herokuapp.com/</a>
      <br> <small>Nov 19,  2019 | Team Strength - 2</small> </p>
      <ul>
        <li>Built login, sign-up and forget password functionality with validations in both frontend and backend. Also used <b>Bcrypt</b> for hashing passwords providing an extra layer of security.</li>
        <li>Implemented <b>Like</b> and <b>Comment</b> features. Like and unlike feature was the trickiest as only logged in users could use it and like count also had to be maintained at the same time.</li>
        <li>Uploading images and videos was done using <b>Multer</b> in the backend and to save those files <b>Coludinary</b>, ultimately the file link from Coludinary was saved in <b>Mongodb Atlas</b></li>
      </ul>
    </div>
  </div>`);
}
