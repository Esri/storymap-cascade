import Cover from './Cover/Cover';
import Sequence from './Sequence';
import Title from './Title';
import Immersive from './Immersive/Immersive';
import Credits from './Credits';

export default class FactoryViewer {

  static getClasses() {
    return {
      Cover: Cover,
      Sequence: Sequence,
      Title: Title,
      Immersive: Immersive,
      Credits: Credits,
      CreditsPlaceholder: function() { }
    };
  }

  static createInstance(sectionJSON = {}) {
    var section = null,
        type = sectionJSON.type;

    if (! type) {
      console.error('Invalid json for: ', sectionJSON);
      return section;
    }

    var classes = this.getClasses();

    if (type == 'cover') {
      section = new classes.Cover(sectionJSON);
    }
    else if (type == 'sequence') {
      section = new classes.Sequence(sectionJSON);
    }
    else if (type == 'title') {
      section = new classes.Title(sectionJSON);
    }
    else if (type == 'immersive') {
      section = new classes.Immersive(sectionJSON);
    }
    else if (type == 'credits') {
      section = new classes.Credits(sectionJSON);
    }
    else if (type == 'credits-placeholder') {
      section = new classes.CreditsPlaceholder(sectionJSON);
    }
    else {
      console.error('Could not find corresponding layout for: ', sectionJSON);
    }

    return section;
  }
}
