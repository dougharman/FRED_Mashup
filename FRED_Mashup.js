/*google.load("feeds", "1");

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

*/

function search(name) {
  var string_1 = name;
  console.log(string_1);
  
  $.ajax({
  url:'http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/search%3Fsearch_text%3D' + string_1 + '%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
    dataType: "json",
    success: function(data){
//  "seriess" with two ss' is correct  I emailed the St. Louis Fed about the error.
//  There are more than 1000 objects in the consumer price index array, so I limited the output to 5 objects (economic data time series)
      console.log(data.contents.seriess.slice(0,5));      
//  Can't figure out how to access more than one deeply nested element of an array on a single for loop pass, so here's my ugly workaround   
      var arr = $(data.contents.seriess[0,5]);
     
      var identifier = [];
      var title =[];
      identifier.push(data.contents.seriess[0].id);
      identifier.push(data.contents.seriess[1].id);
      identifier.push(data.contents.seriess[2].id);
      identifier.push(data.contents.seriess[3].id);
      identifier.push(data.contents.seriess[4].id);
      title.push(data.contents.seriess[0].title);
      title.push(data.contents.seriess[1].title);
      title.push(data.contents.seriess[2].title);
      title.push(data.contents.seriess[3].title);
      title.push(data.contents.seriess[4].title);
      
      console.log(identifier);
      console.log(title)

//  Also can't figure out how to put more than one line in an input box.  This didn't work.
//    $("#searchBox_1").val(((identifier[0]) + ": " + (title[0])) \n ((identifier[1]) + ": " + (title[1])) \n ((identifier[2]) + ": " + (title[2])) \n ((identifier[3]) + ": " + (title[3])) \n ((identifier[4]) + ": " + (title[4])));
//  Ugly work-around: hide input box, add multiple output boxes
//  I tried it - and killed it.  It screwed up my formatting and worse, would have made me add a re-set (which I don't want).
//      $("#search_1").addClass("hide");
//  I'm going to return the first result and call it quits!
      $("#searchBox_1").val((identifier[0]) + ": " + (title[0]));
//      $("#output_1").removeClass("hide").val((identifier[1]) + ": " + (title[1]));
//      $("#output_2").removeClass("hide").val((identifier[2]) + ": " + (title[2]));
//      $("#output_3").removeClass("hide").val((identifier[3]) + ": " + (title[3]));
//      $("#output_4").removeClass("hide").val((identifier[4]) + ": " + (title[4]));
     

    }
  });
}




/*function search(name) {
  var string_1 = name;
  console.log(string_1);

 $.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/search%3Fsearch_text%3D' + string_1 + '%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
    function(data){
      $("#searchBox_1").val(data.contents.seriess[0].id);
      console.log(id);
      console.log(data.contents.seriess[0].id);     // "seriess" with two ss' is correct  I emailed the St. Louis Fed about the error.
      console.log(data.contents.seriess.slice(0,5)); 

      $( "li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});

$.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/search%3Fsearch_text%3D' + string_1 + '%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?',
  function(data){
      $("#searchBox_1").val(data.contents.seriess[0].id);
      console.log(data.contents.seriess[0].id);     // "seriess" with two ss' is correct  I emailed the St. Louis Fed about the error.
      console.log(data.contents.seriess.slice(0,5)); 

      
      console.log(data.contents.seriess.slice(0,5) + ": " + $( this ).text() );
      
      var result = $(document).html(data.contents.seriess.slice(0,5));
      $.each( result, function( key, value ) {
        console.log( key + ": " + value );
      });

  }
  );
}

function retrieve(releaseName) {
  var string_2 = releaseName;
  console.log(string_2);

  $.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/release%3Fseries_id%3D' + string_2 + '%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
    function(data){
      $("#retrieveBox").val(data.contents.releases[0].link);
      window.open(data.contents.releases[0].link)
      console.log(data.contents.releases[0].link);  
    }
  );
}

/*$.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/search%3Fsearch_text%3Dconsumer+price+index%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
    function(data){
      console.log(data.contents.seriess[0].id);
      console.log(data.contents.seriess[0].title);  
    } 
); */


$(document).ready(function() {

  $("#searchBox_1").keydown(function (event) {
    if (event.which == 13) {          
      if (!$.trim($("#searchBox_1").val())) {
              alert("Please enter the type of economic data you're interested in, e.g., interest rates");
          } else {
              search($("#searchBox_1").val());
              $("#searchBox_1").val("");
          }
    }
  });

  $("#retrieveBox").keydown(function (event) {
    if (event.which == 13) {          
      if (!$.trim($("#retrieveBox").val())) {
              alert("Please enter the economic data series identifier, e.g., 53");
          } else {
              retrieve($("#retrieveBox").val());
              $("#retrieveBox").val("");
          }
    }
  });

});


