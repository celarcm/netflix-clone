#### Project development overview

I started by going over the instructions and I soon realized that to finish this test in 8 hours, I shouldn't spend too much time on designing the template myself. So I went online and after a couple of clicks I found a nice Netflix Clone by Carlos Avila on codepen.io:
https://codepen.io/cb2307/pen/XYxyeY

I decided this was a good starting point and ran with it. Well, not really. I then created a new react project using create-react-app and started cutting the template into pieces, navigation part into one component and the movies listings into another.

When I finished with this, I decided it was best to create a new component that would hold the name of a movie genre together with the movies that are included in it, since the CategoriesList component was repetitive. I created the Category component that besides render method also has a method to iterate over movies and add an image for each movie, together with the link to open movie details.

I then started to research the data that The Movie Database API provides. I realized I can always make a single API call for all the data I will need to retieve. This meant that desiging the API call wrappers and Redux store should not be too difficut. So I decided to add 3 properties to the store: genreMovies, movies and searchResults. The first one, genreMovies would be used to hold the genres and the movies that belong to the genre. The second one, movies, would hold all the movies that we would retrieve for when we would like to open certain movie's deatils page. And the last one would hold last search results data, as received from The MovieDB API.

Of course I started thinking that even though the amount of API calls would be limited, there are obvious ways to reduce them, like preventing repetitive API calls, but I decided this should not be a priority at the moment, so I decided to deal with it should I have time at the end.

So I just made simple reducers and actions to go with them, and also started refactoring existing NavigationBar with react-router-dom Link functionality.

I then came accross the challenge of how to distinguish and display homepage categories, differend genres and search results by not writting too much repetitive code. So I first decided I should have a universal component (Category) that would receive only title and a list of movies to display, and could be used for all three, but in the end I ran out of time to refactor Category and SearchResults components to make this a reality. This meant I was left with two pretty similar components, that are only using different state properties and actions.

In the end, I also tried to rush and create MovieDetails component to display movie details, but I didn't come closer than adding Links to movie images.

The Search functionality was also something I didn't have enough time to finish, so there is still a bug to fix - when you enter the search term in the input field and hit Enter, the results are displayed, but the NavigationBar disappears.