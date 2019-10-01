export interface Team {
    id: number;
    logo: string;
    name: string;
    location: string;
    stadium: string;
    position: number;
    points: number
    games_played: number,
    games_won: number,
    games_tied: number,
    games_lost: number,
    goals_in_favor: number,
    goals_against: number,
    goal_difference: number,
}