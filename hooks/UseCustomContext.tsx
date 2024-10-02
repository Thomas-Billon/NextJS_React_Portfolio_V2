import { useContext } from 'react';

export const useCustomContext = <T extends {} | null>(context: React.Context<T>): NonNullable<T> => {
    const contextValue = useContext(context);

    if (contextValue == null) {
        throw new Error(`Components must be wrapped in <${context.displayName} />`);
    }

    return contextValue;
};
