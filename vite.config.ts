import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import voby from 'voby-vite';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'] ?? '',
    plugins: [
      uno(),
      tsconfigPaths(),
      mode === 'development' && voby({ hmr: { enabled: true } }),
    ],
  });
