"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _markdown = require("./markdown");

Object.defineProperty(exports, "MarkdownCustomElement", {
  enumerable: true,
  get: function get() {
    return _markdown.MarkdownCustomElement;
  }
});

function configure(aurelia) {
  aurelia.globalizeResources("./markdown");
}
//# sourceMappingURL=index.js.map