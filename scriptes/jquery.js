

$("#skills-article").hide();
$("#portfolio-article").hide();
$("#offers-article").hide();
$("#contact-article").hide();
$("#messagesent").hide()


        $(".javabtn a").on("click",function(){
            
            var a=$(this).attr("direction");
            $("article").hide();
            $("#"+a+"-article").show();
            $("nav a").css("color","#7c30d8");
            $("#"+a).css("color","#fe9c15");
            $(".javabtn a").css("background-color","#7c30d8");
            $(this).css("background-color","#fe9c15");
        });

        $(".nav-liste a").on("click",function(){
            
            var b=$(this).attr("id");
            $("article").hide();
            $("#"+b+"-article").show();
            $(".javabtn a").css("background-color","#7c30d8");
            $(".javabtn a[direction="+b+"]").css("background-color","#fe9c15");
            $("nav a").css("color","#7c30d8");
            $(this).css("color","#fe9c15");
            if($(window).width() <= 960){
               $("#btn-col").click();
            }
                

            
        });

        $('img').attr('draggable', false);~

        $("#contactMe").on("click",function(){
            $("article").hide();
            $("#contact-article").show();
            $("nav a").css("color","#7c30d8");
            $("#contact").css("color","#fe9c15");
            $(".javabtn a").css("background-color","#7c30d8");
            $(".javabtn a[direction=contact]").css("background-color","#fe9c15");
        });

        $("#logo").on("click",function(){
            $("article").hide();
            $("#home-article").show();
            $("nav a").css("color","#7c30d8");
            $("#home").css("color","#fe9c15");
            $(".javabtn a").css("background-color","#7c30d8");
            $(".javabtn a[direction=home]").css("background-color","#fe9c15");
        });


        $(document).ready(function(){
            $("form").submit(function(event){
                event.preventDefault();
                var name =$("#username").val();
                var email =$("#email").val();
                var phone =$("#phone").val();
                var subject =$("#subject").val();
                var message =$("#message").val();
    
                $.post("php/enregistrement.php",{name: name,email: email, phone: phone , subject: subject, message: message},function(data){
                    $("form input").val("");
                    $("form textarea").val("");
                    $('#messagesent').show();
                    $("form input").removeClass("contact-succes");
                    $("form textarea").removeClass("contact-succes");
    
                    setTimeout(function(){
                       $('#messagesent').hide();
                              }, 5000);
                    
                });
    
            });
        });

        


