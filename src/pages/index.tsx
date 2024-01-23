import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Home, { HomeTemplateProps } from '@/templates/Home'
import bannersMock from '@/Components/BannerSlider/mock'
import gamesMock from '@/Components/GameCardSlider/mock'
import highlightMock from '@/Components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query GetGames {
        games {
          data{
            attributes{
              name

              }
            }
        }
      }
    `,
  })


  return <Home {...props} />
}
// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getServerSideProps() {


  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
