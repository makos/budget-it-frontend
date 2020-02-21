export class Config {
  //private static apiBaseUrl: string = 'http://localhost:3000';
  private static apiBaseUrl: string = 'http://192.168.1.200:3000';
  private static apiIncomeUrl: string = '/api/v1/income';
  private static apiExpensesUrl: string = '/api/v1/expenses';
  private static apiLoginUrl: string = '/api/v1/login';
  private static apiRegisterUrl: string = '/api/v1/register';

  private constructor() {
  }

  static getBaseUrl(): string {
    return Config.apiBaseUrl;
  }

  static getIncomeUrl(): string {
    return Config.apiBaseUrl + Config.apiIncomeUrl;
  }

  static getExpensesUrl(): string {
    return Config.apiBaseUrl + Config.apiExpensesUrl;
  }

  static getLoginUrl(): string {
    return Config.apiBaseUrl + Config.apiLoginUrl;
  }

  static getRegisterUrl(): string {
    return Config.apiBaseUrl + Config.apiRegisterUrl;
  }
}
