import { WebPlugin } from '@capacitor/core';
import { MovesensePluginPlugin } from './definitions';

export class MovesensePluginWeb extends WebPlugin implements MovesensePluginPlugin {
  constructor() {
    super({
      name: 'MovesensePlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const MovesensePlugin = new MovesensePluginWeb();

export { MovesensePlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MovesensePlugin);
