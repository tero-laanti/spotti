/**
 * @fileoverview No unnecessary curly braces for arrow function bodies.
 * @author Joona Juusti
 */
"use strict";

module.exports = {
  meta: {
    docs: {
      description: "disallow unnecessary curly braces around arrow function bodies"
    },
  },
  create: function(context) {
    return {
      ArrowFunctionExpression: function(node) {
        const nodeType = node.body.type;
        if (nodeType !== 'BlockStatement') {
          return;
        }
        const blockStatementStatements = node.body.body
        if (blockStatementStatements.length <= 1) {
          context.report({
            node: node,
            message: 'Omit curly braces if arrow function body has only one statement.'
          })
        }
      }
    }
  }
};
