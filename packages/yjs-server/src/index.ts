/**
 * @context-engine/yjs-server
 * Yjs WebSocket server
 */

import { hello } from '@context-engine/core';

export function helloYjsServer(): string {
  return `Hello from @context-engine/yjs-server! (using ${hello()})`;
}

