import OrdersList, { OrdersListProps } from '@/Components/OrderList'
import ordersMock from '@/Components/OrderList/mock'

import Profile from '@/templates/Profile'



export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
