$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>\"Meow\"</li>");
    $("ul#dog").prepend("<li>\"woof woof\"</li>");
  });
  $("button#bark").click(function(){
    $("ul#cat").prepend("<li>\"MROWWWW\"</li>");
    $("ul#dog").prepend("<li>\"Bark\"</li>");
  });
});
