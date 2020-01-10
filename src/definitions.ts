declare module "@capacitor/core" {
  interface PluginRegistry {
    MovesensePlugin: MovesensePluginPlugin;
  }
}

export interface MovesensePluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
