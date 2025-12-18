/**
 * @context-engine/context
 * Context assembly
 */

import { hello } from '@context-engine/core';
import { helloDgraph } from '@context-engine/dgraph';
import { helloConfig } from '@context-engine/config';

export function helloContext(): string {
  return `Hello from @context-engine/context! (using ${hello()}, ${helloDgraph()}, ${helloConfig()})`;
}

