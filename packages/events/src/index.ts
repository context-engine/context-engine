/**
 * @context-engine/events
 * Event publishing and handling
 */

import { hello } from '@context-engine/core';

export function helloEvents(): string {
  return `Hello from @context-engine/events! (using ${hello()})`;
}

