export const getApiBaseUrl = (): string => {
  const envBase = (import.meta.env.VITE_API_BASE_URL as string | undefined) || '';
  if (envBase && envBase.trim().length > 0) {
    return envBase;
  }
  const defaultPort = 3000;
  return `${window.location.protocol}//${window.location.hostname}:${defaultPort}`;
};

export async function getHealth(): Promise<{ status: string }> {
  const res = await fetch(`${getApiBaseUrl()}/health`);
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`);
  }
  return res.json();
}

