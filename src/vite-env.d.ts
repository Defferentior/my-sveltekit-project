//types for VITE env variables
interface ImportMetaEnv {
    readonly VITE_API_CLIENT: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}