
/*

  google.load("feeds", "1");

      function initialize() {
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/stlfed-fred-select");
        feed.setNumEntries(6);
        feed.load(function(result) {
          if (!result.error) {
            var container = document.getElementById("feed");
            for (var i = 0; i < result.feed.entries.length; i++) {
              var entry = result.feed.entries[i];
              var div = document.createElement("div");
              div.appendChild(document.createTextNode(entry.title));
              container.appendChild(div);
            }
          }
        });
      }

  google.setOnLoadCallback(initialize);

var successFunc = function (resp) {
 $('#output').html(data.contents);
  console.log(resp);
}
*/
/*  success: function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  },
  error: printError  */

/*
var successFunc = function(resp) {
  console.log(resp.contents);
}

var printError = function( req, status, err ) {
  console.log( 'something went wrong', status, err );
};
*/   
/*
$.ajax({
  url: "http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/release%3Frelease_id%3D53%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson%26callback%3D%3F&callback=?",
  dataType: "json",
  success: successFunc,
  error: printError
});


/*  */

$(document).ready(function(){

  $(".button2, #retrieve").keydown(function (event) {
  if (event.which == 13) {
  event.preventDefault();
  }
});
// Initiate the request!

 $.ajax({
  url:'http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/release%3Frelease_id%3D53%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson%26callback%3D%3F&callback=?', 
    dataType: "json",
    success: function(data){$('#output').html(data.contents)}
});


  $(".button2, #retrieve").click(function () {
    event.preventDefault();
  });

$.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/release%3Frelease_id%3D53%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson%26callback%3D%3F&callback=?', function(data){
  $('#output').html(data.contents);
});
});
