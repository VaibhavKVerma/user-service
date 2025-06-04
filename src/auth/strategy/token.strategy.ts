export interface TokenStrategy {
  createToken(username: string, password: string): Promise<string>;
  verifyToken(token: string): Promise<string>;
}
