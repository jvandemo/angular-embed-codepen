'use strict';

describe('', function() {

  var $compile;
  var scope;
  var markup = '<p data-height="268" data-theme-id="0" data-slug-hash="PwzYvv" data-default-tab="result" data-user="DavidKern" class="codepen">See the Pen <a href="http://codepen.io/DavidKern/pen/PwzYvv/">David Kern HTML5 Table</a> by David Kern (<a href="http://codepen.io/DavidKern">@DavidKern</a>) on <a href="http://codepen.io">CodePen</a>.</p>';

  beforeEach(module('embedCodepen'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    scope = _$rootScope_.$new();
  }));

  it('should render the iframe correctly', function(){
    var dom = $compile(markup)(scope);
    var output = '<iframe scrolling="no" frameborder="0" class="cp_embed_iframe" allowtransparency="true" allowfullscreen="true" style="width: 100%; overflow: hidden;" src="http://codepen.io/DavidKern/embed/PwzYvv?user=DavidKern&amp;themeId=0&amp;defaultTab=result&amp;height=268&amp;class=codepen" height="268" id="cp_embed_PwzYvv"></iframe>';
    expect(dom[0].innerHTML).to.equal(output);
  });

});
