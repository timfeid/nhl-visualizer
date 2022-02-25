import Link from 'next/link';
import React from 'react'
import { getTeams, Team as TeamType } from '../libs/getTeams';
import { getTeamStats, RegularSeasonStats } from '../libs/getTeamStats';
import TeamLogo from './TeamLogo';

type Props = {
  season?: string
}

export default class Team extends React.Component<Props> {
  readonly state: {
    teams: TeamType[]
  }
  constructor(props: Props) {
    super(props)

    this.state = { teams: [] };
  }

  async componentDidMount() {
    this.setState({teams: await getTeams(this.props.season)})
  }

  render() {
    if (this.state.teams.length === 0) {
      return <div>.</div>
    }

    return this.state.teams.map(team => (
      <Link key={`team-${team.id}`} href={`/${team.id}`} passHref>
        <a style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <div style={{fontWeight: 900, fontFamily: 'Heebo'}}>
            {team.points}
          </div>
          <div style={{margin: '0 .5rem'}}>

            <TeamLogo teamId={team.id.toString()} />
          </div>
          <div>
            {team.wins}-{team.losses}-{team.ot}
          </div>
        </a>
      </Link>
    ))
  }
}
