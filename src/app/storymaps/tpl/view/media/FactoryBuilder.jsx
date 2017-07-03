import FactoryViewer from './FactoryViewer';

import Text from './Text';

import Image from './ImageBuilder';
import ImageGallery from './ImageGalleryBuilder';
import Video from './VideoBuilder';
import WebMap from './WebMapBuilder';
import WebScene from './WebSceneBuilder';
import WebPage from './WebPageBuilder';
import Audio from './AudioBuilder';

import Empty from './Empty';

import Color from './Color';
import Credits from './CreditsBuilder';
import Discover from 'storymaps/tpl/view/media/Discover';

export default class FactoryBuilder extends FactoryViewer {
  static getClasses() {
    return {
      Text: Text,

      Image: Image,
      ImageGallery: ImageGallery,
      Video: Video,
      WebMap: WebMap,
      WebScene: WebScene,
      WebPage: WebPage,
      Audio: Audio,

      Empty: Empty,

      Color: Color,
      Credits: Credits,
      Discover: Discover
    };
  }
}
