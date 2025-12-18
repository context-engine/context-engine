/**
 * @context-engine/dgraph
 * Dgraph client wrapper
 */

import { hello } from '@context-engine/core';

export function helloDgraph(): string {
  return `Hello from @context-engine/dgraph! (using ${hello()})`;
}

