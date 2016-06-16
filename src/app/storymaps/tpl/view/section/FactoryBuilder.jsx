import FactoryViewer from './FactoryViewer';

import Cover from './Cover/CoverBuilder';
import Sequence from './SequenceBuilder';
import Title from './TitleBuilder';
import Immersive from './Immersive/ImmersiveBuilder';
import Credits from './CreditsBuilder';
import CreditsPlaceholder from './builder/CreditsPlaceholder';

export default class FactoryBuilder extends FactoryViewer {
  static getClasses() {
    return {
      Cover: Cover,
      Sequence: Sequence,
      Title: Title,
      Immersive: Immersive,
      Credits: Credits,
      CreditsPlaceholder: CreditsPlaceholder
    };
  }
}
