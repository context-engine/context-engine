/**
 * @context-engine/lifecycle
 * State machine engine
 */

import { hello } from '@context-engine/core';

export function helloLifecycle(): string {
  return `Hello from @context-engine/lifecycle! (using ${hello()})`;
}

