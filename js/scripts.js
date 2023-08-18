$(document).ready(function () {
  function newItem() {
    let inputValue = $("#input").val();

    // some user feedback and adding the text value to the new created li
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      let li = $("<li></li>").text(inputValue);

      // crossing out handler
      li.on("dblclick", function () {
        $(this).toggleClass("strike");
      });

      // delete handler
      let crossOutButton = $("<button>X</button>");
      crossOutButton.on("click", function () {
        $(this).parent().addClass("delete");
      });
      li.append(crossOutButton);

      $("#list").append(li);

      // clearing the input field
      $("#input").val("");
    }
  }

  $("#button").on("click", newItem);

  // Sorting the Items
  $("#list").sortable();
});
