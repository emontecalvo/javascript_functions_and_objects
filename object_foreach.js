//  example of getting info someObject.friends[0].name


movies = [
  { title: "Mad Max",
    rating: "5",
    hasWatched: true
  },
  { title: "Mad Max: Fury Road",
    rating: "5",
    hasWatched: true
  },
    { title: "Hateful Eight",
    rating: "4",
    hasWatched: false
  }
]


movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched";
  } else {
  result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
})