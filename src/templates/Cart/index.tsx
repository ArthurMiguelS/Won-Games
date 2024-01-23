import PaymentOptions, { PaymentOptionsProps } from '@/Components/PaymentOptions'
import CartList, { CartListProps } from '@/Components/CartList'

import { Container } from '@/Components/Container'
import { Divider } from '@/Components/Divider'
import { GameCardProps } from '@/Components/GameCard'
import { HighlightProps } from '@/Components/Highlight'

import Heading from '@/Components/Heading'
import Showcase from '@/Components/Showcase'
import Empty from '@/Components/Empty'
import Base from '@/templates/Base'

import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
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
}

export default Cart
