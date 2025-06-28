node --version
npm --version
npm install -g pnpm
pnpm clean
pnpm i
pnpm --filter ui --filter hooks --filter shared --filter constants build
pnpm --filter zod build
pnpm i