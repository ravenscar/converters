const { TextEncoder: NodeTextEncoder } = require("util");

if (!window.TextEncoder) {
  window.TextEncoder = NodeTextEncoder;
}
