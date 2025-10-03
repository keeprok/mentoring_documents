import { LoginData } from 'src/components/BackofficeLogin/BackofficeLoginModal';
import { fetchWithErrorHandling } from 'src/lib/apiUtils';

//영록 - api
export const getBackofficeEndpoint = () => {
  // 프로덕션 환경
  if (import.meta.env.PROD) {
    return 'https://hodong-erp.com/backoffice';
  }

  // MSW가 명시적으로 비활성화된 경우에만 실제 API 사용
  if (import.meta.env.VITE_ENABLE_MSW === 'false') {
    return (
      import.meta.env.VITE_API_BASE_URL + '/backoffice' || 'https://test.hodong-erp.com/backoffice'
    );
  }

  // 기본값: MSW 사용
  return '/api/backoffice';
};
export const BACKOFFICE_ENDPOINT = getBackofficeEndpoint();
//영록 : 로그인 -  api
export const postSignInApi = async (username: string, password: string): Promise<LoginData> => {
  const { user, access_token } = await fetchWithErrorHandling<LoginData>(
    `${BACKOFFICE_ENDPOINT}/login`,
    {
      method: 'POST',
      skipAuth: true,
      body: JSON.stringify({
        username: username,
        password,
      }),
    },
  );
  return { user, access_token };
};

export const getTokenApi = async (token: string): Promise<void> => {
  await fetchWithErrorHandling(`${BACKOFFICE_ENDPOINT}/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Auth user 도 고민해 볼거 postSignInApi - post부분
