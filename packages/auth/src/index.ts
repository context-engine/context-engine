/**
 * @context-engine/auth
 * Authentication providers
 */

import { hello } from '@context-engine/core';

export function helloAuth(): string {
  return `Hello from @context-engine/auth! (using ${hello()})`;
}

