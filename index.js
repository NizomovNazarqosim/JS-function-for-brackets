// in JavaScript

var isValid = function(s) {
    const stack = [];     // is used to store unclosed brackets
    const characters = { ')': '(', '}': '{', ']': '['};     // values with correspons certain brackets
  for (const char of s) {       // loop coming argument
      if (!characters[char]){   //check this is opening bracket if it is correct store to stack
        stack.push(char); 
      } 
      else if (stack.pop() !== characters[char]){     // check this stored values in stack have closing one and remove from stack
        return false;
      } 
    }
    return stack.length === 0;     // if there is not have any unclosed or opened brackets return true
};

isValid('({}()[])')

