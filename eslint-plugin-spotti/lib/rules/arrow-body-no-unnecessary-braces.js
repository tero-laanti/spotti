/**
 * @fileoverview No unnecessary braces for arrow function bodies.
 * @author Joona Juusti
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  create: function(context) {

    // variables should be defined here
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

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
