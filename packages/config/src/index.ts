/**
 * @context-engine/config
 * Configuration inheritance
 */

import { hello } from '@context-engine/core';

export function helloConfig(): string {
  return `Hello from @context-engine/config! (using ${hello()})`;
}

