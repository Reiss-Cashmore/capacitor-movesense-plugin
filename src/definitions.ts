declare module "@capacitor/core" {
  interface PluginRegistry {
    Movesense: MovesensePlugin;
  }
}

export interface MovesensePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  
}
