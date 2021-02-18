$(function(){
        $(".langin").click(function() {
        $(".langin").hide();
        $(".langout").show();                
        });
        
        $(".langout").click(function(){
        $(".langout").hide();
        $(".langin").show();     
        });

        $(".menu01").mouseleave(function(){ 
          $(this).stop().slideUp();
          });
        

        $(".menu01_up").mouseover(function(){
            $(".menu01").stop().slideDown();
        });

    });

        // $(".menu01_up").mouseover(function(){
        //     $(".menu01").stop().slideDown();
        //     });

        // $(".menu01").mouseleave(function(){ 
        //     $(this).stop().slideUp();
        //     });
        // });

        // $('.menu01').slideDown(function(){
        //     $(".container .shadow").css("display","block");
        // });

        // $(".menu01").slideUp(function(){ 
        //     $(".container .shadow").css("display","none");
        // });



    // $( "#tesetdiv" ).css( {'background-color':
    // 'red', color:'blue' } ); 

    // $( “#testdiv” ).css( 'background-color', 'red' )
    // .css( 'color', 'blue' );