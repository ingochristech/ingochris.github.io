
  $.getJSON('https://www.reddit.com/r/bodyweightfitness/about.json',function(data){
  console.log(data);
  var output = '';  
  $.each(data, function(key,val){
    output = data.data.subscribers;
  });
  $('#subscribers').html(output);
  });


/*
$(document).ready(function() {
  $.getJSON("data.json", function(data) {
    console.log(data.data.subscribers) //just to log in console as well
    var res = data.filter(function(o) {
      return o.id == 4
    }).pop();
    console.log(res)
    var article_data = '';

    article_data += '<div class="page-title">' + res.title + '</div>';

    $('#update').html(article_data);
  });
});
*/