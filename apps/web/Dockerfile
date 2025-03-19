
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
RUN turbo prune web --docker

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

# enable remote caching
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM

ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN

# telemetry disabled
ENV TURBO_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# BUILD ARGUMENTS
# Web-app Base url
ARG NEXT_PUBLIC_API_BASE_URI

# Database uri
ARG MONGO_URI

# NextAuth secret
ARG AUTHJS_SECRET

# Resend api key for email
ARG RESEND_API_KEY

# Arcjet validation
ARG ARCJET_KEY

# Algolia apis
ARG NEXT_PUBLIC_ALGOLIA_APPLICATION_ID
ARG NEXT_PUBLIC_ALGOLIA_SEARCH_API
ARG NEXT_ALGOLIA_WRITE_API

# Github Token
ARG GH_TOKEN
ARG GH_RAW_CONTENT_API
ARG GH_AUTH_DOC_API

# Branch
ARG NEXT_PUBLIC_BRANCH

RUN pnpm turbo run build

# ******************************RUN THE APP***********************************
FROM base AS runner
WORKDIR /app

ENV TURBO_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD [ "node", "apps/web/server.js" ]