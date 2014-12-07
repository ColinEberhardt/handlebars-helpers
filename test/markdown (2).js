'use strict';

var path = require('path');
var should = require('should');
var Handlebars = require('handlebars');
var should = require('should');

// Local helpers
var markdown = require('../lib/helpers/markdown');

var fixtures = path.join.bind(process.cwd(), 'test/fixtures');
var context;

describe('Should convert Markdown to HTML: ', function() {
  var simple         = '## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)';
  var simpleExpected = '<h2 id="some-markdown">Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href="http://github.com">Click here</a></p>\n';

  it('should convert a markdown string', function(done) {
    context = markdown.convert(simple);
    done();
  });
  it('should read a markdown file', function(done) {
    var file = fixtures('simple.md');
    context = markdown.read(file);
    expect(context).to.equal(simpleExpected);
    done();
  });
  it('should convert a markdown file with code highlighting', function(done) {
    var file = fixtures('complex.md');
    context = markdown.read(file);
    done();
  });
});


// describe('Converting Markdown files', function() {

//   var opts = {
//     gfm: true,
//     highlight: 'auto'
//   };

//   var simple = "## Some Markdown\n\n" +
//                 " - one\n" +
//                 " - two\n" +
//                 " - three\n\n" +
//                 "[Click here](http://github.com)";


//   var simpleExpected = "<h2 id=\"some-markdown\">Some Markdown</h2>\n" +
//                        "<ul>\n" +
//                        "<li>one</li>\n" +
//                        "<li>two</li>\n" +
//                        "<li>three</li>\n" +
//                        "</ul>\n" +
//                        "<p><a href=\"http://github.com\">Click here</a></p>\n";

//   describe('Using new style', function() {

//     it("convert markdown string", function(done) {
//       var data = markdown.convert(simple, opts);
//       //expect(data).to.equal(simpleExpected);
//       done();
//     });

//     it("read markdown file", function(done) {
//       var data = markdown.read('./test/fixtures/pages/simple1.md', opts);
//       expect(data).to.equal(simpleExpected);
//       done();
//     });

//     it("convert markdown file with code highlighting", function(done) {
//       var data = markdown.read('./test/fixtures/pages/complex1.md', opts);
//       //expect(complexExpected).to.deep.equal(data);
//       done();
//     });
//   });
// });
