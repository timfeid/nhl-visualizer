import axios from 'axios'

const colorMap = {
  1: {darkColor: '#000000', altColor: '#b40000'},
  2: {darkColor: '#015095', altColor: '#ED792E'},
  3: {darkColor: '#89A203', altColor: '#7B5804'},
  4: {darkColor: '#000000', altColor: '#FA4616'},
  5: {darkColor: '#000000', altColor: '#FFB71B'},
  6: {darkColor: '#000000', altColor: '#FFB71B'},
  7: {darkColor: '#000000', altColor: '#013087'},
  8: {darkColor: '#000000', altColor: '#A6192E'},
  9: {darkColor: '#000000', altColor: '#B9975B'},
  10: {darkColor: '#000000', altColor: '#05205B'},
  12: {darkColor: '#000000', altColor: '#b40000'},
  13: {darkColor: '#000000', altColor: '#B9975B'},
  14: {darkColor: '#000000', altColor: '#05205B'},
  15: {darkColor: '#000000', altColor: '#A30F24'},
  16: {darkColor: '#000000', altColor: '#CC8A00'},
  17: {darkColor: '#000000', altColor: '#C8112E'},
  18: {darkColor: '#000000', altColor: '#FFB71B'},
  19: {darkColor: '#000000', altColor: '#013087'},
  20: {darkColor: '#000000', altColor: '#C8112E'},
  21: {darkColor: '#000000', altColor: '#6F253D'},
  22: {darkColor: '#000000', altColor: '#FC4C07'},
  23: {darkColor: '#000000', altColor: '#081C2C'},
  24: {darkColor: '#000000', altColor: '#B9975B'},
  25: {darkColor: '#000000', altColor: '#035D3D'},
  28: {darkColor: '#000000', altColor: '#006272'},
  29: {darkColor: '#000000', altColor: '#C8112E'},
  30: {darkColor: '#000000', altColor: '#144734'},
  52: {darkColor: '#000000', altColor: '#53565A'},
  53: {darkColor: '#000000', altColor: '#6F253D'},
  54: {darkColor: '#000000', altColor: '#B9975B'},
  55: {darkColor: '#000000', altColor: '#6CA3B8'},
}

const imageMap = {
  1: 'https://besthqwallpapers.com/Uploads/20-4-2021/164761/nico-hischier-new-jersey-devils-nhl-swiss-hockey-player-red-stone-background.jpg',
  2: 'https://wallpapercave.com/wp/slRfYQB.jpg',
  3: 'https://wallpapercave.com/wp/wp10038910.jpg',
  4: 'https://wallpapercave.com/wp/Hpuyzfb.jpg',
  5: 'https://wallpapercave.com/wp/wp2518887.jpg',
  6: 'https://wallpapercave.com/wp/XpQI7dc.jpg',
  7: 'https://wallpapercave.com/wp/wp4101114.jpg',
  8: 'https://wallpapercave.com/wp/bOTV3Yh.jpg',
  9: 'https://wallpapercave.com/wp/wp4319551.jpg',
  10: 'https://wallpapercave.com/wp/wp9055978.jpg',
  12: 'https://wallpapercave.com/wp/wp4177827.jpg',
  13: 'https://wallpapercave.com/wp/wp8612863.jpg',
  14: 'https://wallpapercave.com/wp/wp4103987.jpg',
  15: 'https://wallpapercave.com/wp/wp4097514.jpg',
  16: 'https://wallpapercave.com/wp/sn2Mf6Z.jpg',
  17: 'https://wallpapercave.com/wp/T7VIwqE.jpg',
  18: 'https://wallpapercave.com/wp/wp4114398.jpg',
  19: 'https://wallpapercave.com/wp/fN9NuIt.jpg',
  20: 'https://wallpapercave.com/wp/wp4106353.jpg',
  21: 'https://wallpapercave.com/wp/wp1964063.jpg',
  22: 'https://wallpapercave.com/wp/wp4118794.jpg',
  23: 'https://wallpapercave.com/wp/wp4114366.jpg',
  24: 'https://wallpapercave.com/wp/wp2720704.png',
  25: 'https://wallpapercave.com/wp/wp1881831.jpg',
  26: 'https://wallpapercave.com/wp/bbxFx3c.jpg',
  28: 'https://wallpapercave.com/wp/wp4107859.jpg',
  29: 'https://wallpapercave.com/dwp2x/hlLCcV5.jpg',
  30: 'https://wallpapercave.com/wp/wc1794948.jpg',
  52: 'https://wallpapercave.com/wp/M6xB0Gi.jpg',
  53: 'https://wallpapercave.com/wp/wp2040039.jpg',
  54: 'https://wallpapercave.com/wp/wp2488963.jpg',
  55: 'https://wallpapercave.com/wp/wp8242304.jpg',
}

export type Team = {
  id: number
  abbreviation: string
  name: string
  location: string
  leagueRank: number
  wins: number
  losses: number
  ot: number
  points: number
  darkColor: string
  altColor: string
  image: string
}


export async function getTeams(season: string = ''): Promise<Team[]> {
  console.log('called here')
  const teams: Team[] = []

  try {
    const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/standings?hydrate=team`)

    for (const records of response.data.records) {
      for (const teamRecords of records.teamRecords) {
        teams.push({
          id: teamRecords.team.id,
          abbreviation: teamRecords.team.abbreviation,
          name: teamRecords.team.teamName,
          location: teamRecords.team.locationName,
          leagueRank: parseInt(teamRecords.leagueRank, 10),
          wins: teamRecords.leagueRecord.wins,
          losses: teamRecords.leagueRecord.losses,
          ot: teamRecords.leagueRecord.ot,
          points: teamRecords.points,
          image: imageMap[teamRecords.team.id] || '',
          ...(colorMap[teamRecords.team.id] || {darkColor: '#000000', altColor: '#FFFFFF'}),
        })
      }
    }
  } catch (e) {
    console.log(e)
  }

  return teams.sort((a, b) => a.leagueRank > b.leagueRank ? 1 : -1)
}
