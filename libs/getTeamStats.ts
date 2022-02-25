import axios from 'axios'
import { getTeams, Team } from './getTeams'

export type RegularSeasonStats = {
  gamesPlayed: {
    stat: number,
    name: string,
  },
  wins: {
    stat: number,
    ranking: number,
    name: string,
  },
  losses: {
    stat: number,
    ranking: number,
    name: string,
  },
  ot: {
    stat: number,
    ranking: number,
    name: string,
  },
  pts: {
    stat: number,
    ranking: number,
    name: string,
  },
  ptPctg: {
    stat: string,
    ranking: number,
    name: string,
  },
  goalsPerGame: {
    stat: number,
    ranking: number,
    name: string,
  },
  goalsAgainstPerGame: {
    stat: number,
    ranking: number,
    name: string,
  },
  evGGARatio: {
    stat: number,
    ranking: number,
    name: string,
  },
  powerPlayPercentage: {
    stat: string,
    ranking: number,
    name: string,
  },
  powerPlayGoals: {
    stat: number,
    ranking: number,
    name: string,
  },
  powerPlayGoalsAgainst: {
    stat: number,
    ranking: number,
    name: string,
  },
  powerPlayOpportunities: {
    stat: number,
    ranking: number,
    name: string,
  },
  penaltyKillPercentage: {
    stat: string,
    ranking: number,
    name: string,
  },
  shotsPerGame: {
    stat: number,
    ranking: number,
    name: string,
  },
  shotsAllowed: {
    stat: number,
    ranking: number,
    name: string,
  },
  winScoreFirst: {
    stat: number,
    ranking: number,
    name: string,
  },
  winOppScoreFirst: {
    stat: number,
    ranking: number,
    name: string,
  },
  winLeadFirstPer: {
    stat: number,
    ranking: number,
    name: string,
  },
  winLeadSecondPer: {
    stat: number,
    ranking: number,
    name: string,
  },
  winOutshootOpp: {
    stat: number,
    ranking: number,
    name: string,
  },
  winOutshotByOpp: {
    stat: number,
    ranking: number,
    name: string,
  },
  faceOffsTaken: {
    stat: number,
    ranking: number,
    name: string,
  },
  faceOffsWon: {
    stat: number,
    ranking: number,
    name: string,
  },
  faceOffsLost: {
    stat: number,
    ranking: number,
    name: string,
  },
  faceOffWinPercentage: {
    stat: string,
    ranking: number,
    name: string,
  },
  shootingPctg: {
    stat: number,
    name: string,
  },
  savePctg: {
    stat: number,
    name: string,
  },
}

export type TeamWithStats = {
  team: Team
  regularSeasonStats: RegularSeasonStats
}

function convertOrdinalToNumber(number: string) {
  return parseInt(number.substring(0, number.length - 2), 10)
}

export async function getTeamStats(teamId: string, season: string = '', teams: Team[]): Promise<TeamWithStats> {
  try {
    const [response] = await Promise.all([
      axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/stats?season=${season}`),
    ])

    const regularSeasonStats = response.data.stats.find(stat => stat.type.displayName === 'statsSingleSeason')
    const regularSeasonRankings = response.data.stats.find(stat => stat.type.displayName === 'regularSeasonStatRankings')

    return {
      team: teams.find(team => team.id === regularSeasonStats.splits[0].team.id),
      regularSeasonStats: {
        gamesPlayed: {
          stat: regularSeasonStats.splits[0].stat.gamesPlayed,
          name: 'Games played',
        },
        wins: {
          stat: regularSeasonStats.splits[0].stat.wins,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.wins),
          name: 'Wins',
        },
        losses: {
          stat: regularSeasonStats.splits[0].stat.losses,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.losses),
          name: 'Losses',
        },
        ot: {
          stat: regularSeasonStats.splits[0].stat.ot,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.ot),
          name: 'OT Losses',
        },
        pts: {
          stat: regularSeasonStats.splits[0].stat.pts,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.pts),
          name: 'Points',
        },
        ptPctg: {
          stat: regularSeasonStats.splits[0].stat.ptPctg,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.ptPctg),
          name: 'Point %',
        },
        goalsPerGame: {
          stat: regularSeasonStats.splits[0].stat.goalsPerGame,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.goalsPerGame),
          name: 'Goals per game',
        },
        goalsAgainstPerGame: {
          stat: regularSeasonStats.splits[0].stat.goalsAgainstPerGame,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.goalsAgainstPerGame),
          name: 'Goals against per game',
        },
        evGGARatio: {
          stat: regularSeasonStats.splits[0].stat.evGGARatio,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.evGGARatio),
          name: 'Even Strength GA',
        },
        powerPlayPercentage: {
          stat: regularSeasonStats.splits[0].stat.powerPlayPercentage,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.powerPlayPercentage),
          name: 'Powerplay %',
        },
        powerPlayGoals: {
          stat: regularSeasonStats.splits[0].stat.powerPlayGoals,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.powerPlayGoals),
          name: 'Powerplay Goals',
        },
        powerPlayGoalsAgainst: {
          stat: regularSeasonStats.splits[0].stat.powerPlayGoalsAgainst,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.powerPlayGoalsAgainst),
          name: 'Powerplay GA',
        },
        powerPlayOpportunities: {
          stat: regularSeasonStats.splits[0].stat.powerPlayOpportunities,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.powerPlayOpportunities),
          name: 'Powerplay Opportunities',
        },
        penaltyKillPercentage: {
          stat: regularSeasonStats.splits[0].stat.penaltyKillPercentage,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.penaltyKillPercentage),
          name: 'Penalty kill %',
        },
        shotsPerGame: {
          stat: regularSeasonStats.splits[0].stat.shotsPerGame,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.shotsPerGame),
          name: 'Shots per game',
        },
        shotsAllowed: {
          stat: regularSeasonStats.splits[0].stat.shotsAllowed,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.shotsAllowed),
          name: 'Shots allowed',
        },
        winScoreFirst: {
          stat: regularSeasonStats.splits[0].stat.winScoreFirst,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.winScoreFirst),
          name: 'Wins when scoring first',
        },
        winOppScoreFirst: {
          stat: regularSeasonStats.splits[0].stat.winOppScoreFirst,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.winOppScoreFirst),
          name: 'Wins when opponent scores first',
        },
        winLeadFirstPer: {
          stat: regularSeasonStats.splits[0].stat.winLeadFirstPer,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.winLeadFirstPer),
          name: 'Wins when leading after 1',
        },
        winLeadSecondPer: {
          stat: regularSeasonStats.splits[0].stat.winLeadSecondPer,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.winLeadSecondPer),
          name: 'Wins when leading after 2',
        },
        winOutshootOpp: {
          stat: regularSeasonStats.splits[0].stat.winOutshootOpp,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.winOutshootOpp),
          name: 'Wins when outshooting opponent',
        },
        winOutshotByOpp: {
          stat: regularSeasonStats.splits[0].stat.winOutshotByOpp,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.winOutshotByOpp),
          name: 'Wins when outshot by opponent',
        },
        faceOffsTaken: {
          stat: regularSeasonStats.splits[0].stat.faceOffsTaken,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.faceOffsTaken),
          name: 'Faceoffs taken',
        },
        faceOffsWon: {
          stat: regularSeasonStats.splits[0].stat.faceOffsWon,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.faceOffsWon),
          name: 'Faceoffs won',
        },
        faceOffsLost: {
          stat: regularSeasonStats.splits[0].stat.faceOffsLost,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.faceOffsLost),
          name: 'Faceoffs lost',
        },
        faceOffWinPercentage: {
          stat: regularSeasonStats.splits[0].stat.faceOffWinPercentage,
          ranking: convertOrdinalToNumber(regularSeasonRankings.splits[0].stat.faceOffWinPercentage),
          name: 'Faceoff %',
        },
        shootingPctg: {
          stat: regularSeasonStats.splits[0].stat.shootingPctg,
          name: 'Shooting %',
        },
        savePctg: {
          stat: regularSeasonStats.splits[0].stat.savePctg,
          name: 'Save %',
        },
      }
    }
  } catch (e) {
    console.log(e)
  }
}
