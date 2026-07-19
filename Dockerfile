# syntax=docker/dockerfile:1

# Install dependencies separately so Docker can reuse this layer until the
# package manifest or lockfile changes.
FROM oven/bun:1.3.14-alpine AS installer
WORKDIR /app

COPY package.json bun.lock vite.config.ts ./
RUN bun install --frozen-lockfile


# Build the TanStack Start application. Nitro writes the production server to
# .output/.
FROM installer AS builder
WORKDIR /app

COPY . .
RUN bun run build


# Nitro's output is self-contained, so the runtime image only needs Bun and the
# compiled application.
FROM oven/bun:1.3.14-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/.output ./

EXPOSE 3000

CMD ["bun", "run", "server/index.mjs"]
