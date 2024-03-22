import { ReactNode } from 'react'


export interface DefaultProps {
    className?: string,
    children?: ReactNode
}

export interface IterableProps {
    index?: number
}

export interface ClickableProps extends DefaultProps {
    onClick?: () => void
}


export type Props<T extends {}> = T & DefaultProps & {
    props?: T
}

/*
    The resulting object will look something like this:
    Props {
        foo?: string,
        bar: number,
        props?: {
            foo?: string,
            bar: number
        }
        className?: string,
        children?: ReactNode
    }
*/