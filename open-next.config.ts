import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// Every docs page is prerendered at build time, so no incremental cache
// (R2) is needed. Add one here only if pages start using ISR.
export default defineCloudflareConfig({})
