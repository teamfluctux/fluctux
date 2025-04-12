FROM node:18-alpine AS base

# ******************************SETUP PNPM*********************************
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ******************************PRUNE THE PROJECT*********************************
FROM base AS pruner

RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN pnpm install -g turbo
COPY . .
RUN turbo prune server --docker

# ******************************INSTALLATION**************************************
FROM base AS installer

RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/turbo.json ./turbo.json

RUN pnpm install --frozen-lockfile

# ******************************BUILD THE APP*************************************
FROM base AS builder

WORKDIR /app

COPY --from=installer /app/ .
COPY --from=pruner /app/out/full/ .

ENV TURBO_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm turbo run build

# ******************************RUN THE APP***********************************
FROM base AS runner
WORKDIR /app

ENV TURBO_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/apps/server/package*.json ./apps/server/
COPY --from=builder /app/apps/server/node_modules ./apps/server/node_modules/
COPY --from=builder /app/apps/server/dist ./apps/server/dist/

CMD [ "node", "apps/server/dist/server.cjs" ]