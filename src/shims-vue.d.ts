declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'to-zalgo';

declare module 'emoji-from-word';

declare interface emojiFromWordResult {
  Match: {
    input: string;
    score: number;
    emoji: {
      keywords: string[];
      char: string;
      category: string;
    }
    emoji_name: string
  }
}

declare module 'emojify-text';
