import React from 'react'

type Props = {
  teamId: string
  type?: 'dark' | 'light'
}

export default class TeamLogo extends React.Component<Props> {
  render() {
    return (
      <>
        <svg width={50} height={50}>
          <use href={`#logos_team-${this.props.teamId}-20212022-${this.props.type || "light"}`} />
        </svg>
      </>
    )
  }
}
