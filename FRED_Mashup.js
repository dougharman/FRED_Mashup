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




$(document).ready(function() {


 $.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/release%3Fseries_id%3DIRA%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
        function(data){
        console.log(data.contents.releases[0].id);
    });


$.getJSON('http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/release%3Fseries_id%3DIRA%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
      function(data){
      console.log(data.contents.releases[0].link);
    });


$.ajax({
  url:'http://anyorigin.com/get?url=http%3A//api.stlouisfed.org/fred/series/search%3Fsearch_text%3Dconsumer+price+index%26api_key%3De19770641c3d3ed9c68f7cd06544bcfb%26file_type%3Djson&callback=?', 
    dataType: "json",
    success: function(data){console.log(data.contents.seriess[0].id)},
});


  




});



