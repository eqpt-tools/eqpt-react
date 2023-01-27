import axios, { AxiosError, CreateAxiosDefaults } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

export default function axiosWithInterceptor(params: CreateAxiosDefaults<any>) {
  const jar = new CookieJar();

  const axiosInstance = axios.create({
    ...params,
    jar,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any>) => {
      if (process.env.NODE_ENV === 'development' && error.response)
        console.error(
          `Axios error occurred\nStatus: ${error.response.status}\nURL: ${error.response.config.url}\nData: ${error.response.data}`,
        );

      throw error;
    },
  );

  return wrapper(axiosInstance);
}
