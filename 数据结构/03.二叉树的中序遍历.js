/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归
let inorderTraversal = function (root) {
  let result = [];
  let inorder = (root) => {
    if (root) {
      inorder(root.left);
      result.push(root.val);
      inorder(root.right);
    }
  };
  inorder(root);
  return result;
};
