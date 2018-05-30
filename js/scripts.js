$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>\"Meow\"</li>");
    $("ul#dog").prepend("<li>\"woof woof\"</li>");
  });
});
