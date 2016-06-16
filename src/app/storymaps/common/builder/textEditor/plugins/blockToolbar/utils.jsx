import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';

const utils = {

  isChildOf: (el, parent) => {
    return MediumEditor.util.traverseUp(el, (element) => {
      return element === parent;
    }) ? true : false;
  }

};

export default utils;
