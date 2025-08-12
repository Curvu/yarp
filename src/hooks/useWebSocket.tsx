import { useEffect, useRef, useState, useCallback } from 'react';

function isEqual(a: any, b: any) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export const useWebSocket = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        setError(null);
      };

      ws.onmessage = (event) => {
        let parsed: any;
        try {
          parsed = JSON.parse(event.data);
        } catch {
          parsed = event.data;
        }

        setData((prev: any) => isEqual(prev, parsed) ? prev : parsed);
      };

      ws.onerror = (err) => {
        setError(err);
      };

      ws.onclose = () => {
        setIsConnected(false);
      };
    } catch (err) {
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    connect();
    return () => {
      wsRef.current?.close();
    };
  }, [connect]);

  return {
    data,
    isConnected,
    error,
  };
};
