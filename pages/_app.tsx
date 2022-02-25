import '../css/global.css'
import logos from '../assets/logos.svg'
import { getTeams } from '../libs/getTeams';

export default function MyApp({ Component, pageProps, teams }) {
  return (
    <>
      <Component {...pageProps} teams={teams} />
      <div dangerouslySetInnerHTML={{__html: logos.content}}></div>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const teams = await getTeams()
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, teams };
};
