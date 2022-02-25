import React from 'react'
import { getTeamStats, TeamWithStats } from '../libs/getTeamStats';
import TeamLogo from './TeamLogo';

type Props = {
  teamId: string
  teams: any[]
  season?: string
}

export default class Team extends React.Component<Props> {
  readonly state: {
    team: TeamWithStats
  }
  constructor(props: Props) {
    super(props)

    this.state = { team: undefined };
  }

  async componentDidMount() {
    this.setState({team: await getTeamStats(this.props.teamId, this.props.season, this.props.teams)})
  }

  async componentDidUpdate() {
    if (this.state.team && this.state.team.team.id.toString() !== this.props.teamId) {
      this.setState({team: await getTeamStats(this.props.teamId, this.props.season, this.props.teams)})
    }
  }

  render() {
    if (!this.state.team) {
      return <div>loading</div>
    }

    const statsWithRanking = []
    for (const index of Object.keys(this.state.team.regularSeasonStats)) {
      if (this.state.team.regularSeasonStats[index].ranking !== undefined) {
        statsWithRanking.push(index)
      }
    }

    const totalTeams = Array.from(Array(32))
    const width = 100 / totalTeams.length
    const barHeight = 20

    return (
      <div>
        <div style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.25), rgba(0,0,0,.25), #000),
              linear-gradient(to right, #000, rgba(0,0,0,.25), rgba(0,0,0,.25), rgba(0,0,0,.25), #000),
              url('${this.state.team.team.image}')`,
              backgroundSize: 'cover',
              paddingTop: 300,
              paddingBottom: 50,
              fontFamily: 'Heebo',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: '125px',
              fontSize: 125,
              marginLeft: 300,
              marginRight: -200,
        }}>
          <div style={{marginLeft: -300, opacity: '.5'}}>{this.state.team.team.location}</div>
          <div style={{marginLeft: -300}}>{this.state.team.team.name}</div>
        </div>
        <div className="stats-table">
          <div>
            <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
              <div style={{width: 300}}>
                &nbsp;
              </div>
              <div style={{width: '100%', display: 'flex', height: barHeight}}>
                {totalTeams.map((_, i) => (
                  <div style={{justifyContent: 'center', width: `${width}%`, display: 'flex', alignItems: 'center'}}>
                    {32-i}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            {statsWithRanking.map(index => (
              <div style={{width: '100%', display: 'flex', alignItems: 'center', margin: '.75rem 0'}}>
                <div style={{width: 300, fontWeight: 700}}>
                  {this.state.team.regularSeasonStats[index].name}
                </div>
                <div style={{width: '100%', display: 'flex', alignItems: 'center', height: barHeight, background: `linear-gradient(to right, ${this.state.team.team.darkColor}, ${this.state.team.team.altColor}, ${this.state.team.team.altColor})`}}>
                  <div style={{width: `${(width * (32-this.state.team.regularSeasonStats[index].ranking)) + (width / 2)}%`, display: 'flex', alignItems: 'center', height: barHeight}}>
                    {/* {this.state.team.regularSeasonStats[index].ranking} */}
                  </div>
                  <div style={{paddingLeft: '.5rem', flexGrow: '1', background: '#000', height: '100%'}}>
                    {this.state.team.regularSeasonStats[index].stat}
                    {this.state.team.regularSeasonStats[index].name.substring(this.state.team.regularSeasonStats[index].name.length - 1) === '%' ? '%' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
