import { WebPlugin } from '@capacitor/core';
import { MovesensePlugin } from './definitions';

export class MovesenseWeb extends WebPlugin implements MovesensePlugin {
  constructor() {
    super({
      name: 'Movesense',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const Movesense = new MovesenseWeb();

export { Movesense };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Movesense);
