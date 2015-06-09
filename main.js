$(document).ready(function() {

  var repotempl = [
  "<div class='sampleDiv'>",
  "<div class='sampleLeft'>",
      "<h1><%= name %></h1>",
      "<p><%= description %></p>",
      "<p class='greytext'><%= updated_at %></p>",
    "</div>",
    "<ul class='sampleRight'>",
      "<li>Javascript</li>",
      "<li><%= stargazers_count %></li>",
      "<li><%= forks %></li>",
    "</ul>",
  "</div>"
].join("");

  var compiledTmpl = _.template(repotempl);

  var repoString = "";

  repos.forEach(function(el) {
    repoString += compiledTmpl(el);
  });

  $('.innercolRight').append(repoString);


var profileTmpl = [
  "<li class='bgPrPic'><img class='bgPic' src='<%= avatar_url %>'></li>",
  "<li class='prName'>",
    "<h1 class='boldName'><%= name %></h1>",
    "<p class='userName'><%= login %></p>",
  "</li>",
  "<li class='prInfo'>",
    "<p class='prInfoTxt'><%= location %></p>",
    "<p class='prInfoTxt'>Joined on <%= created_at %></p>",
  "</li>",
  "<ul class='prInfo prInfofollowStats'>",
      "<li class='statBox'>",
        "<span class ='bigNumbabox'><%= followers %></span>",
        "<span class='captionBox'>follower</span>",
      "</li>",
      "<li class='statBox'>",
        "<span class ='bigNumbabox'>1</span>",
        "<span class='captionBox'>starred</span>",
      "</li>",
      "<li class='statBox'>",
        "<span class ='bigNumbabox'><%= following %></span>",
        "<span class='captionBox'>following</span>",
      "</li>",
  "</ul>",
  "</li>"
].join("");

var compiledTmplprofile = _.template(profileTmpl);

var profileString = "";

profiles.forEach(function(el) {
  profileString += compiledTmplprofile(el);
});

$('.innercolLeft').prepend(profileString);

});
