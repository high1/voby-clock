import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import voby from 'voby-vite';
import { checker } from 'vite-plugin-checker';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'] ?? '',
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      mode === 'development' &&
        voby({
          hmr: { enabled: true, filter: /\.tsx$/ },
        }),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint . --max-warnings 0',
          useFlatConfig: true,
        },
      }),
    ],
  });
