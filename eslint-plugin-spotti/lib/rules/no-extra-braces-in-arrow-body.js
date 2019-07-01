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
        const statementsInBlockStatement = node.body.body
        if (statementsInBlockStatement.length === 1) {
          if (statementsInBlockStatement[0].expression && statementsInBlockStatement[0].expression.type) {
            if (statementsInBlockStatement[0].expression.type !== "AssignmentExpression") {
              context.report({
                node: node,
                message: 'Omit curly braces if arrow function body has only one statement.'
              })
            }
          }
        }
      }
    }
  }
};
