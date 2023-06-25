import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import voby from 'voby-vite';
import { checker } from 'vite-plugin-checker';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'] ?? '',
    plugins: [
      uno(),
      tsconfigPaths(),
      mode === 'development' && voby({ hmr: { enabled: true } }),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint . --max-warnings 0',
        },
      }),
    ],
  });
