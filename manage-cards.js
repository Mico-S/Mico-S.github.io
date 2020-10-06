// var tweetIdNum = 0;

// Added an additional argument "colNum" to attach specific Ids to tweet cards
// depending on what column they are in. This prevents deleting other tweets in
// other columns when deleteCard() is called
function addCard(divId, colNum)
{
    var tweet = document.createElement("div");
    tweet.className = "card text-right";
    tweet.id = "tweet" + colNum;
    

    var image = document.createElement("img");
    image.className = "card-img-top mx-auto";
    image.src = "./images/twitter_logo.png";
    image.alt = "Twitter Logo";
    image.style.height = "100px";
    image.style.width = "100px";

    var cardBody = document.createElement("div");
    var bodyHeader = document.createElement("h4");
    var bodyHeaderText = document.createTextNode("Tweet");
    bodyHeader.appendChild(bodyHeaderText);
    var bodyText = document.createElement("p");
    bodyTextParagraph = document.createTextNode("Sample tweet will go here!");
    bodyText.appendChild(bodyTextParagraph);

    var cardFooter = document.createElement("div");
    cardFooter.className = "card-footer text-center";
    var cardFooterButton = document.createElement("button");
    cardFooterButton.className = "btn btn-danger";
    cardFooterButton.onclick = function(){deleteCard(tweet.id)};
    cardFooterButton.innerHTML = "Remove this Tweet";
    cardFooter.appendChild(cardFooterButton);

    cardBody.appendChild(bodyHeader);
    cardBody.appendChild(bodyText);
    tweet.appendChild(image);
    tweet.appendChild(cardBody);
    tweet.appendChild(cardFooter);
    document.getElementById(divId).appendChild(tweet);
    // tweetIdNum += 1;
    console.log(tweet.id);
}

function deleteCard(tweetId)
{
    var tweet = document.getElementById(tweetId);
    tweet.remove();
}