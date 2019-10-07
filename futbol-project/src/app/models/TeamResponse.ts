import { Team } from './team';
import { Response } from './response';

export class TeamResponse extends Response {
  data: Team[]
}