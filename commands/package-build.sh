node --version
npm --version
npm install -g pnpm
pnpm clean
pnpm i
pnpm --filter ui --filter hooks --filter constants build
pnpm --filter zod build
pnpm --filter shared build
pnpm i