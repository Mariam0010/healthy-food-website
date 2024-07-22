$(document).on("click", ".img-item", function () {
    var imgSrc = $(this).attr("src");
    $("#mainImg").attr("src", imgSrc);
  });
  
  $(document).on("click", ".img-item-second-slider", function () {
    var img = $(this).attr("src");
    $("#mImg").attr("src", img);
  });
  
  $(document).on("click", ".img-item-third-slider", function () {
    var img = $(this).attr("src");
    $("#Img").attr("src", img);
  });
  
  $(document).ready(function () {
    // Your custom script
    $("#searchInput").on("input", function () {
      var inputValue = $(this).val().toLowerCase();
  
      // If input is empty, show all images
      if (inputValue === "") {
        $(".container.col-3").show();
      } else {
        // If input is not empty, hide all images and show only the ones starting with the input letter
        $(".container.col-3").hide();
        $(".container.col-3[id^='" + inputValue + "']").show();
      }
    });
  });
  