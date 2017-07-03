import IssueTypes from './../IssueTypes';
import Media from './Media';

export default class Audio extends Media {
  static check(items) {
    return super.check(items, 'audio');
  }

  static _checkItem(audio) {
    return new Promise((resolve/*, reject*/) => {
      const MILLISECONDS_TO_WAIT = 10000;
      let trialAudio = new window.Audio();

      audio.details.source = audio.id;
      // check the audio file. If it's bad, add the error to it.
      // if checking takes too long, just resolve.
      // i don't know why, but sometimes working audio doesn't resolve.
      let timer = window.setTimeout(() => {
        Audio.resolveAndClear(audio, timer, resolve);
      }, MILLISECONDS_TO_WAIT);

      trialAudio.onloadedmetadata = function() {
        Audio.resolveAndClear(audio, timer, resolve);
      };

      trialAudio.ondurationchange = function() {
        if (trialAudio.duration) {
          window.clearTimeout(timer);
          if (isFinite(trialAudio.duration)) {
            Audio.resolveAndClear(audio, timer, resolve);
          }
          else {
            Audio._onAudioError(audio, resolve);
          }
        }
      };

      trialAudio.onerror = function() {
        window.clearTimeout(timer);
        Audio._onAudioError(audio, resolve);
      };

      trialAudio.src = [audio.id];
    });
  }

  static resolveAndClear(audio, timer, resolve) {
    window.clearTimeout(timer);
    resolve(audio);
  }

  static _onAudioError(audio, resolve) {
    audio.errors.push(IssueTypes.audio.inaccessible);
    resolve(audio);
  }
}
