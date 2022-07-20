import "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            available: string
            busy: string
            gray: string
        }
    }
}