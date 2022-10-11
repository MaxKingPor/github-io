/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // import type { Comment } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
