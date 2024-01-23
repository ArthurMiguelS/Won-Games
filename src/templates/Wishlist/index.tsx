import GameCard, { GameCardProps } from '@/Components/GameCard'
import { HighlightProps } from '@/Components/Highlight'
import { Container } from '@/Components/Container'
import { Divider } from '@/Components/Divider'
import { Grid } from '@/Components/Grid'
import Showcase from '@/Components/Showcase'
import Heading from '@/Components/Heading'
import Empty from '@/Components/Empty'
import Base from '@/templates/Base'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
      <Divider />
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
