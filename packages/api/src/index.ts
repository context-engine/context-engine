/**
 * @context-engine/api
 * Fastify server factory
 */

import { hello } from '@context-engine/core';
import { helloAuth } from '@context-engine/auth';
import { helloDgraph } from '@context-engine/dgraph';

export function helloApi(): string {
  return `Hello from @context-engine/api! (using ${hello()}, ${helloAuth()}, ${helloDgraph()})`;
}

