import { defineConfig } from 'rasengan';
import { rasengan } from 'rasengan/plugin';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@rasenganjs/mdx/plugin';
import { configure } from "@rasenganjs/vercel";

export default defineConfig(async () => {
  return {
    prerender: true,
    vite: {
      plugins: [tailwindcss(), rasengan({ adapter: configure({}) }), mdx({ code: { keepBackground: false } })],
    },
  };
});
