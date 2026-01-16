import tailwindcss from '@tailwindcss/vite';
import { type ConfigEnv, defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import voby from 'voby-vite';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'] ?? '',
    plugins: [
      tailwindcss(),
      mode === 'development' &&
        voby({
          hmr: { enabled: true, filter: /\.tsx$/ },
        }),
      checker({
        eslint: {
          lintCommand: 'eslint . --max-warnings 0',
          useFlatConfig: true,
        },
        typescript: true,
      }),
    ],
    resolve: {
      tsconfigPaths: true,
    },
  });
