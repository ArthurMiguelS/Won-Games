import CardsList, { CardsListProps } from '@/Components/CardsList'
import Profile from '@/templates/Profile'

import mockCards from '@/Components/PaymentOptions/mock'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
