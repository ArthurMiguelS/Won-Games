import Wishlist, { WishlistTemplateProps } from '@/templates/Wishlist'

import gamesMock from '@/Components/GameCardSlider/mock'
import highlightMock from '@/Components/Highlight/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
