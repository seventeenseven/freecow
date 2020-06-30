// Sticky Header
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".top-nav").addClass("light-header");
                $(".navbar-brand").removeClass("logo_v");

            } else {
                $(".top-nav").removeClass("light-header");
                $(".navbar-brand").addClass("logo_v");
            }
        });


        //for the images swapped
        var imageSources = ["./images/person2.jpg", "./images/person3.jpg", "./images/person4.jpg", "./images/person5.jpg"]

        var index = 0;
        setInterval (function(){
          if (index === imageSources.length) {
            index = 0;
          }
          document.getElementById("person_img").src = imageSources[index];
          index++;
        } , 2000);

        var texts = ["In short and long term you save a Lot of money, i think it's totally smart to use it", "We love Freecos, a life changer", "I wanna go out more often now", "Freecos for president "]
        var index = 0;
        setInterval (function(){
          if (index === texts.length) {
            index = 0;
          }
          document.getElementById("messages").innerText = texts[index];
          index++;
        } , 2000);

        var names = ["Moshe,<br> Jerusalem", "Noa,<br> Tel Aviv", "Liam,<br> Bersheva","Shani, <br>Haifa",  "Omer,<br> Tel Aviv"]
        var index = 0;
        setInterval (function(){
          if (index === texts.length) {
            index = 0;
          }
          document.getElementById("person_name").innerHTML = names[index];
          index++;
        } , 2000);
