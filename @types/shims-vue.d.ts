declare module '*.vue'

declare global {
  interface NuxtApp {
    $constant: any
    $helper: any
    $api: any
  }
}

declare function useNuxtApp(): NuxtApp
