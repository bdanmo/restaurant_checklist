// 1. Hide/show the text inside the #helpText span element when the user's mouse passes over the text "How are these ranked?" (Hint: use the jQuery toggle() method)
$('#helpText').hover(function(event) {
  $(this).children('span').toggle();
});

// 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button.
$('#addNew').on('click', function(event) {
  let $restaurantInput = $('#newRestaurantInput');
  if ($restaurantInput === '') {
    return;
  } else {
    $('ul').append(`<li>${$restaurantInput.val()}</li>`);
    $restaurantInput.val('');
  }
}); 

// 3. Add the class "strike" to the restaurant name each time it's double clicked. Use event delegation on the ul element to listen for a click event on the ul's list items
$('ul').on('dblclick', 'li', function() {
  $(this).toggleClass('strike');
});
