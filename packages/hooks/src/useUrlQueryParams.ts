import { useRouter, useSearchParams } from "next/navigation";

export const useUrlQueryParams = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const handlePushParams = (paramName: string, value: string) => {
    params.set(paramName, value);
    router.push(`?${params.toString()}`);
  };

  const removeQueryParam = (param: string) => {
    params.delete(param);

    router.replace(`?${params.toString()}`);
  };
  return {
    handlePushParams,
    removeQueryParam,
  };
};
