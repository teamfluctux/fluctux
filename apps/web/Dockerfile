FROM node:18-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=web --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# ARGUMENTS
# app url
ARG NEXT_PUBLIC_API_BASE_URI

# database uri
ARG MONGO_URI

# github credentials
ARG GITHUB_ID
ARG GITHUB_SECRET

# google credentials
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

# discord credentials
ARG DISCORD_CLIENT_ID
ARG DISCORD_CLIENT_SECRET

# nextAuth secret
ARG AUTHJS_SECRET

# resend api key for email
ARG RESEND_API_KEY

# arcjet validation
ARG ARCJET_KEY

# algolia apis
ARG NEXT_PUBLIC_ALGOLIA_APPLICATION_ID
ARG NEXT_PUBLIC_ALGOLIA_SEARCH_API
ARG ALGOLIA_WRITE_API

RUN echo "ALGOLIA_APPLICATION_ID=$NEXT_PUBLIC_ALGOLIA_APPLICATION_ID"
RUN echo "ALGOLIA_SEARCH_API=$NEXT_PUBLIC_ALGOLIA_SEARCH_API"
RUN echo "ALGOLIA_WRITE_API=$ALGOLIA_WRITE_API"

# Github Token
ARG GH_TOKEN
ARG GH_RAW_CONTENT_API
ARG GH_AUTH_DOC_API

# JWT
ARG JWT_SECRET_GRAPHQL

# Branch
ARG NEXT_PUBLIC_BRANCH

ENV NEXT_PUBLIC_ALGOLIA_APPLICATION_ID=$NEXT_PUBLIC_ALGOLIA_APPLICATION_ID
ENV NEXT_PUBLIC_ALGOLIA_SEARCH_API=$NEXT_PUBLIC_ALGOLIA_SEARCH_API
ENV ALGOLIA_WRITE_API=$ALGOLIA_WRITE_API

RUN pnpm dlx turbo run build --filter=web

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD node apps/web/server.js