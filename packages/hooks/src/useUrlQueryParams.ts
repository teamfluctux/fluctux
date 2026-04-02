import { useRouter, useSearchParams } from "next/navigation";



export const useUrlQueryParams = <T extends string>() => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handlePushQueryParam = (paramName: T, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(paramName, value);
        router.push(`?${params.toString()}`);
    };

    const removeQueryParam = (param: T) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(param);

        router.replace(`?${params.toString()}`);
    };

    const removeMultipleQueryParams = <K extends T>(...values: K[]) => {
        const params = new URLSearchParams(searchParams.toString());
        values.forEach((item) => params.delete(item))
        router.replace(`?${params.toString()}`)
    }

    const getQueryParam = (param: T) => {
        return searchParams.get(param)
    }
    return {
        handlePushQueryParam,
        removeQueryParam,
        removeMultipleQueryParams,
        getQueryParam
    };
};
