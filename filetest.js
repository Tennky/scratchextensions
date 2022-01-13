const version = '1.0';
const author = 'M.D. Walters';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg',
      blockIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/block.svg',
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#documentation',
      color1: '#9500ff',
      color2: '#000000',
      color3: '#4b0081',
      color4: '#4b0081',
      blocks: [
        {
          opcode: 'follow',
          blockType: Scratch.BlockType.REPORTER,
          text: 'follow [user]',
          "arguments": {
            "url": {
              "type": "string",
              "defaultValue": "TennkYguy4342",
            }
          }
        },  {
          opcode: 'add me to most populars',
          blockType: Scratch.BlockType.COMMAND,
          text: 'add me to the most populars: [add]',
          "arguments": {
            "comment": {
              "type": "string",
              "defaultValue": "TennkYguy4342",
            }
          }
        },  {
          opcode: 'reporter',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one]',
          "arguments": {
            "one": {
              "type": "string",
              "defaultValue": "apple ",
            },
            "two": {
              "type": "string",
              "defaultValue": "banana ",
            },
            "three": {
              "type": "string",
              "defaultValue": "pineapple",
            }
          }
        }, {
          opcode: 'addition',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] + [two] + [three]',
          "arguments": {
            "one": {
              "type": Scratch.ArgumentType.NUMBER,
              "defaultValue": "1",
            },
            "two": {
              "type": Scratch.ArgumentType.NUMBER,
              "defaultValue": "2",
            },
            "three": {
              "type": Scratch.ArgumentType.NUMBER,
              "defaultValue": "3",
            }
          }
        },  {
          opcode: 'equaltotrue',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns true?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        }, {
          opcode: 'equaltofalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns false?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'equaltonothing',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns nothing?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'miliseconds',
          blockType: Scratch.BlockType.REPORTER,
          text: 'miliseconds',
        },  {
          opcode: 'and',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[one] and [two] and [three]',
          "arguments": {
            "one": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "two": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "three": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'joinone',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [one]',
          "arguments": {
            "one": {
              "type": "string",
              "defaultValue": "apple",
            }
          }
        },  {
          opcode: 'newline',
          blockType: Scratch.BlockType.REPORTER,
          text: 'start a new line',
        },  {
          opcode: 'ifthenelse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [if] then return [text] else return [else]',
          "arguments": {
            "text": {
              "type": "string",
              "defaultValue": "foo",
            },
            "if": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "else": {
              "type": "string",
              "defaultValue": "foobar",
            }
          }
        },  {
          opcode: 'reporter',
          blockType: Scratch.BlockType.REPORTER,
          text: '[if]',
          "arguments": {
            "if": {
            "type": Scratch.ArgumentType.BOOLEAN,
            },
            "text": {
              "type": "string",
              "defaultValue": "text here!",
            }
          }
        },
      ]
    }  
  }
fetch({url}) {
    return fetch(url).then(response => response.text());
  };
join(args) {
    return args.one + args.two + args.three;
  };
addition(args) {
    const addition = args.one + args.two + args.three;
    return addition;
  };
equaltotrue(args) {
    if (args.boolean == true) {
      return 'true';
    } else {
      return 'false';
    }
  };
equaltofalse(args) {
    if (args.boolean == false) {
      return 'true';
    } else {
      return 'false';
    }
  };
equaltonothing(args) {
    if (args.boolean == '') {
      return 'true';
    } else {
      return 'false';
    }
  };
miliseconds() {
  const date = new Date();
  const miliseconds = date.getMilliseconds();
  return miliseconds;
  };
and(args) {
  if (args.one && args.two && args.three) {
      return 'true';
    } else {
      return 'false';
    }
  };
joinone(args) {
  return args.one;
  };
newline() {
  return '\n';
  };
ifthenelse(args) {
  if (args.if == true) {
    return args.text;
  } else {
    return args.else;
  }
  };
ifthen(args) {
  if (args.if == true) {
    return args.text;
  }
  };
when(args) {
  return args.boolean;
  };
}
Scratch.extensions.register(new turboFoolishness());
