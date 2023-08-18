$(document).ready(function () {
  function newItem() {
    let inputValue = $("#input").val();

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      let li = $("<li></li>").text(inputValue);

      li.on("dblclick", function () {
        $(this).toggleClass("strike");
      });

      let crossOutButton = $("<button>X</button>");
      crossOutButton.on("click", function () {
        $(this).parent().addClass("delete");
      });
      li.append(crossOutButton);

      $("#list").append(li);

      $("#input").val("");
    }
  }

  $("#button").on("click", newItem);

  $("#list").sortable();
});
