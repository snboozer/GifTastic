
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
        var i =0 
        for (i = 0; i < newImage.length; i++)
        {
            newImage.attr("src",response.data[0,1,3,4,5,6,7,8,9].images.fixed_height.url)
            $(".searchResults").append(newImage)
        }
        console.log(newImage)
    })
     
})

// still and animated (toggle between each)
