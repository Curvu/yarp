import { useState, useCallback } from 'react';

interface RequestOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useRequest = (requestFunc: (params?: any) => Promise<any>, options?: RequestOptions) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const doRequest = useCallback((...params: any[]) => {
    setError(null);
    setLoading(true);

    requestFunc(...params)
      .then((data) => {
        setData(data);
        options?.onSuccess?.(data);
      })
      .catch((error) => {
        setData(null);
        setError(error);
        options?.onError?.(error);
      })
      .finally(() => setLoading(false));
  }, [requestFunc, options]);

  return {
    doRequest,
    data,
    setData,
    isLoading,
    error,
  };
};