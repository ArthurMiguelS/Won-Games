import Cart, { CartProps } from '@/templates/Cart'

import itemsMock from '@/Components/CartList/mock'
import gamesMock from '@/Components/GameCardSlider/mock'
import higlightMock from '@/Components/Highlight/mock'
import cardsMock from '@/Components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock
    }
  }
}
