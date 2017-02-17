import mockups from './mockups';

export interface IConfig {
  endpoint: string;
  checkout: string;
  useMockup: boolean;
  mockups: any[],
}

const config: IConfig = {
  endpoint: '/seminars/',
  checkout: '/checkout/',
  useMockup: true,
  mockups: mockups,
};

export default config;