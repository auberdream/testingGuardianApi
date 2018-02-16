(function (exports) {
  function HeadlineListView(newRequest) {
    this.newRequest = newRequest.responseText
    this.someJson = JSON.parse(this.newRequest);
  }

  HeadlineListView.prototype.makeSomeHtml = function () {
    string = "<ul>"
    this.someJson.response.results.forEach(function(news) {
      string += `<li><a href="#">${news.webTitle}</a></li>`
    })
    string += "</ul>"
    return string
  }

  exports.HeadlineListView = HeadlineListView
})(this);
