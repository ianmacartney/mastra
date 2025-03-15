import { createLogger } from '@mastra/core/logger';
import type { Logger } from '@mastra/core/logger';

export const logger: Logger = createLogger({
  name: 'Mastra CLI',
  level: 'debug',
});
