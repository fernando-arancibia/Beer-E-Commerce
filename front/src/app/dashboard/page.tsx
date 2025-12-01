import UserOrders from "@/components/UserOrders"
import Userprofile from "@/components/UserProfile"

export default function DashboardPage() {
    return ( 
    <div>
        <Userprofile />
        <UserOrders />
    </div>)
}