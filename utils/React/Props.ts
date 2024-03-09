import { ReactNode } from 'react'

interface DefaultProps {
    className?: string,
    children?: ReactNode
}

export interface ActivableProps extends DefaultProps {
    isActive: boolean,
    index: number,
    onClickActivable: (value: number) => void
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