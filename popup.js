document.addEventListener('DOMContentLoaded', function () {
  // This function is executed when the popup HTML has finished loading.

  const dismissButton = document.getElementById('dismissButton');
  // Get a reference to the "Dismiss" button in the popup by its element ID.

  dismissButton.addEventListener('click', function () {
    // Add a click event listener to the "Dismiss" button.

    window.close();
    // When the button is clicked, this function will be executed, and it will close the popup using `window.close()`.
  });
});
