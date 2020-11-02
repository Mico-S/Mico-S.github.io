// Variables for the for loop counter and the upper limit for the for loop
// inside of the makeApiCall function
var i = 0;
var upperLimit = 0;

function makeApiCall(resetLoop) {
    numImages = document.getElementById("numImagesID").value;
    tags = document.getElementById("tagsID").value;
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9096772d899df80012d5c2c7be9e913d&tags=${tags}&privacy_filter=1&safe_search=1&extras=url_sq&page=1&format=json&nojsoncallback=1`;

    // If the inputs for numImages field or tags field is empty, do not execute the API query
    if(numImages === '' || tags === '')
    {
        console.log("There are empty fields...")
        return false;
    }

    // If makeApiCall is called from the submit button, reset the loop
    // counter, upper limit for the loop, and the contents in the imagesDiv
    // to make space for new cards
    if(resetLoop === 1) {
        upperLimit = 0;
        i = 0;
        document.getElementById("imagesDiv").innerHTML = "";
    }

    // If the index i for the photo array is greater than or equal to 100, we have reached
    // the maximum number of images returned by the API call so stop attemping to load images
    if(i >= 100)
    {
        console.log("Reached limit of photos requested from API");
        return false;
    }

    // Increase the upper limit by the number of images requested
    upperLimit = upperLimit + parseInt(numImages);

    console.log(i, ", ", upperLimit);

    $.ajax({url:url, dataType:"json"}).then(function(data) {
        console.log(data);

        for(i; i < upperLimit; i += 5)
        {
            const cardRow = 
            `<div class="row justify-content-center">
                <div class="col-sm-2">
                    <div class="card">
                        <img class="card-img-top" src="${data.photos.photo[i].url_sq}" alt="flickrCardPhoto">
                        <div class="card-body">
                            <p class="card-text"> ${data.photos.photo[i].title} </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img class="card-img-top" src="${data.photos.photo[i + 1].url_sq}" alt="flickrCardPhoto">
                        <div class="card-body">
                            <p class="card-text"> ${data.photos.photo[i + 1].title} </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img class="card-img-top" src="${data.photos.photo[i + 2].url_sq}" alt="flickrCardPhoto">
                        <div class="card-body">
                            <p class="card-text"> ${data.photos.photo[i + 2].title} </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img class="card-img-top" src="${data.photos.photo[i + 3].url_sq}" alt="flickrCardPhoto">
                        <div class="card-body">
                            <p class="card-text"> ${data.photos.photo[i + 3].title} </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img class="card-img-top" src="${data.photos.photo[i + 4].url_sq}" alt="flickrCardPhoto">
                        <div class="card-body">
                            <p class="card-text"> ${data.photos.photo[i + 4].title} </p>
                        </div>
                    </div>
                </div>
             </div>`;

            document.getElementById("imagesDiv").innerHTML = document.getElementById("imagesDiv").innerHTML + cardRow;
        }
    });
}

// When the user scrolls to the bottom of the page, call makeApiCall
window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        makeApiCall(0);
    }
};