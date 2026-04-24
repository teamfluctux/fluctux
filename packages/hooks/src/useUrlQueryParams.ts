import { useRouter, useSearchParams } from "next/navigation";

/**
 * A hook to manage URL query parameters in Next.js applications.
 * Provides methods to get, set, and remove parameters with type safety.
 * 
 * @template T - A union of string literals representing the allowed parameter names.
 * 
 * @example
 * ```tsx
 * type Params = 'view' | 'id';
 * const { handlePushQueryParam, getQueryParam } = useUrlQueryParams<Params>();
 * 
 * // To set ?view=details
 * handlePushQueryParam('view', 'details');
 * 
 * // To get value
 * const view = getQueryParam('view');
 * ```
 */
export const useUrlQueryParams = <T extends string>() => {
  const searchParams = useSearchParams();
  const router = useRouter();

  /**
   * Adds or updates a query parameter and pushes the new state to the history stack.
   * @param paramName - The name of the parameter.
   * @param value - The value to set.
   */
  const handlePushQueryParam = (paramName: T, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramName, value);
    router.push(`?${params.toString()}`);
  };

  /**
   * Removes a specific query parameter and replaces the current URL in the history.
   * @param param - The name of the parameter to remove.
   */
  const removeQueryParam = (param: T) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);

    router.replace(`?${params.toString()}`);
  };

  /**
   * Removes multiple query parameters at once and replaces the current URL.
   * @param values - A rest parameter of parameter names to remove.
   */
  const removeMultipleQueryParams = <K extends T>(...values: K[]) => {
    const params = new URLSearchParams(searchParams.toString());
    values.forEach((item) => params.delete(item));
    router.replace(`?${params.toString()}`);
  };

  // -- Push multiple query params
  // const handlePushMultiQueryParams = (...values) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   values.forEach(item => params.set(item[0], item[1]))
  //   router.push(`?${params.toString()}`);
  // }

  /**
   * Retrieves the value of a specific query parameter.
   * @param param - The name of the parameter.
   * @returns The parameter value or null if not found.
   */
  const getQueryParam = (param: T) => {
    return searchParams.get(param);
  };
  return {
    handlePushQueryParam,
    removeQueryParam,
    removeMultipleQueryParams,
    getQueryParam,
  };
};
