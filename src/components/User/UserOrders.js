// Import global states
import { useGlobalState } from '../../utils/stateContext'

// Import order component
import Order from '../User/UserOrder'

const UserOrders = () => {
    // Calling dispatch into the component, so that we can update the global state
    const {store} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {orderList,loggedInUser} = store
    // console.log(orderList)

    const userOrders = orderList.filter(orders => parseInt(orders.userID) === parseInt(loggedInUser.id))
    userOrders.sort((a,b) => b.id - a.id)    
    console.log(userOrders)
    return (
        <>
            <h1>My Orders</h1>
            {userOrders.map(order =>
                <Order key={order.id} order={order} />    
            )}
        </>
    )
}

export default UserOrders;