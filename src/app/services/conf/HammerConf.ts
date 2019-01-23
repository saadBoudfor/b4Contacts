/**
 * Created by sboudfor on 18/01/2019.
 */
import {HammerGestureConfig} from '@angular/platform-browser';

export class HammerConf extends HammerGestureConfig {
  overrides = <any> {
    'pinch': {enable: false},
    'rotate': {enable: false}
  }
}
