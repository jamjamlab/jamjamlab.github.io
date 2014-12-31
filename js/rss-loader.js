alert("Hello!");
$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://codepen.io/jamwjam/blog/feed/'),
  dataType : 'json',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
      var container = document.getElementById("feed");
      
      $.each(data.responseData.feed.entries, function (i, e) {
        console.log("------------------------");
        console.log("title      : " + e.title);
        console.log("author     : " + e.author);
        console.log("description: " + e.content);
        console.log("link       : " + e.link);
        
        var article = document.createElement("article");
        article.innerHTML = e.content;
        container.appendChild(article);
      });
    }
  }
});