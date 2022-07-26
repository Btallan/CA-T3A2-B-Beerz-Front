import { useGlobalState } from "../../utils/stateContext";


import UserBooking from "./UserBooking";

const UserEvents = () => {
    // Import context
    const {store} = useGlobalState();
    // Import the global states
    const {bookingList, loggedInUser} = store
    // Create empty array to store use events
    var userBookings = []
    // Events where use is attendance
    bookingList.forEach(booking => {
        if(booking.userID === loggedInUser.id){
            userBookings.push(booking)        
        } 
    });

    // console.log(eventList)
    // console.log(loggedInUser)
    // console.log(userBookings)

    var activeEvents = userBookings.some(booking => booking.status === true)

    // console.log(activeEvents)

    return (
        <>
            {activeEvents? 
                <>
                    <h1>My Upcoming Events</h1>
                    {/* Only show bookings which have not been cancelled */}
                    {userBookings.map(booking => 
                    !booking.status ? null :    <UserBooking key={booking.id} booking={booking}/> 
                    )}
                </>
            :
                    null
            }

        </>
    )
}

export default UserEvents;