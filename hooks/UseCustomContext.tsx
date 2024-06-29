import { useContext } from 'react';

export const useCustomContext = <T extends {} | null>(context: React.Context<T>, tagName?: string): NonNullable<T> => {
    const contextValue = useContext(context);

    if (contextValue == null) {
        if (tagName) {
            throw new Error(`Components must be wrapped in <${tagName} />`);
        }
        else {
            throw new Error('Components must be wrapped in context provider');
        }
    }

    return contextValue;
};
