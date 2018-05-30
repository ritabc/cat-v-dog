$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>What's up, man?!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Later, dude!</li>");

        $("ul#user").children("li").first().click(function() {
          $(this).remove();
        });

        $("ul#webpage").children("li").first().click(function() {
          $(this).remove();
        });
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>What do you mean?!</li>");

        $("ul#user").children("li").first().click(function() {
          $(this).remove();
        });

        $("ul#webpage").children("li").first().click(function() {
          $(this).remove();
        });
  });
});
