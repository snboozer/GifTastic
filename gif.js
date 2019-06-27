
$("#btn").click(function () {
    var newButton = $("<button>")
    newButton.text($("#search").val().trim())
    newButton.addClass("color")
    $("#buttonHolder").append(newButton)
    $("#search").val("")
})

$(document).on("click", ".color", function () {
    var color = $(this).text()
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=MpLyRvYhEJZbCEvVaJYCov69SsBkGrIS&q="+ color + "&limit=10&offset=0&rating=G&lang=en"
console.log (queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].images.fixed_height.url)
        var newImage = $("<img>")
        newImage.attr("src",response.data[0].images.fixed_height.url)
        $(".searchResults").append(newImage)
        console.log(newImage)

    })
})

// still and animated
// data still attr and data animate attr, and data status attr