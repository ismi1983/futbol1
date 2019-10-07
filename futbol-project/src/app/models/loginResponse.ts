import { Response } from './response';

export class LoginResponse extends Response {
  data: {
    token: string
  }
}