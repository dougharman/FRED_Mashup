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




$(document).ready(function(){




});

/*
//This is to remove the validation message if no poster image is present
$('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

//function definition

   var getPoster = function(){

        //Grab the movie title and store it in a variable

        var film = $('#term').val();

         //Check if the user has entered anything

         if(film == ''){

            //If the input field was empty, display a message

            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

} else {

            //They must have entered a value, carry on with API call, first display a loading message to notify the user of activity

            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");


$.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {

               //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information

               if (json != "Nothing found."){

                  //Display the poster and a message announcing the result

                     $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
} else {

   //If nothing is found, I attempt humor by displaying a Goonies poster and confirming that their search returned no results.

   $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/
23afca60ebf72f8d88cdcae2c4f31866/goonies?callback=?", function(json) {

      $('#poster').html('<h2 class="loading">We're afraid nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');

   });
}
});

          }

        return false;
   }

   //Because we've wrapped the JSON code in a function, we can call it on mouse click or on a hit of the Return button while in the input field

   $('#search').click(getPoster);

   $('#term').keyup(function(event){

       if(event.keyCode == 13){

           getPoster();

       }

   });

});
*/










































