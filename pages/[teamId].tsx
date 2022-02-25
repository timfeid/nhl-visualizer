import Team from "../components/Team";
import TeamLogo from "../components/TeamLogo";
import TeamList from "../components/TeamList";
import { useRouter } from "next/router";

function HomePage({teams}) {
  const router = useRouter()

  return (
    <div className="container">
      <div style={{display: 'flex'}}>
        <div style={{flexGrow: 1}}>
          <Team teamId={router.query.teamId as string || '1'} teams={teams} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: 600, marginLeft: 32}}>
          <span style={{
            fontFamily: 'Heebo',
            fontWeight: 900,
            textAlign: 'center',
            fontSize: 18,
            textTransform: 'uppercase',
          }}>
            Standings
          </span>
          <TeamList />
        </div>
      </div>
    </div>
  )
}

export default HomePage
