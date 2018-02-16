(function (exports) {
  function Controller(headlinelistview) {
    this.headlinelistview = headlinelistview
  }

  Controller.prototype.renderHeadlineList = function() {
    document.getElementById("headlines").innerHTML = this.headlinelistview.makeSomeHtml();
  }

  exports.Controller = Controller

})(this);
