/**
 * @context-engine/canvas
 * Visual canvas with Yjs
 */

import { hello } from '@context-engine/core';
import { helloUI } from '@context-engine/ui';

export function helloCanvas(): string {
  return `Hello from @context-engine/canvas! (using ${hello()}, ${helloUI()})`;
}

