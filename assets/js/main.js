
  $(document).ready(function(){
    $("button").click(function(){ 
    //alert("i am click");
    var selected=$(this);
    $('button').removeClass('active');
    $(selected).addClass('active');
    }),
     $a = $('.a'),
        $b=$('.b'),
         $c=$('.c'),
         $d=$('.d')
         $home=$('.home'),
         $aboutus= $('.aboutus');
         
         $a.click(function(){
         $home.fadeIn();
         $aboutus.fadeOut();
         });
         $b.click(function(){
         $aboutus.fadeIn();
         $home.fadeOut();	 
    });
    });
    var x = document.body;
    var color = ["blue", "green", "yellow", "red"];
    setInterval(function() {
       for(let y = 0; y <=4; y++){
        x.style.backgroundColor = color[Math.floor(Math.random() *4)];  
      }
    }, 500) ;
    
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    function slideSwitch() {
        var $active = $('#slideshow IMG.active');
      
        if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
      
        // use this to pull the images in the order they appear in the markup
        var $next =  $active.next().length ? $active.next()
            : $('#slideshow IMG:first');
      
        // uncomment the 3 lines below to pull the images in random order
      
        // var $sibs  = $active.siblings();
        // var rndNum = Math.floor(Math.random() * $sibs.length );
        // var $next  = $( $sibs[ rndNum ] );
      
        $active.addClass('last-active');
      
        $next.css({opacity: 0.0})
            .addClass('active')
            .animate({opacity: 1.0}, 1000, function() {
                $active.removeClass('active last-active');
            });
    }
      
    $(function() {
        setInterval( "slideSwitch()", 2000 );
    });
    
    
    