import { Team } from './team';

export interface ResponseTeams {
  status: string;
  message: string;
  data: Team[];
}
export interface ResponseTeam {
  status: string;
  message: string;
  data: Team;
}
export interface ResponseLogin {
  status: string;
  message: string;
  data: { token: string };
}
export interface Response {
  status: string;
  message: string;
  data: object;
}