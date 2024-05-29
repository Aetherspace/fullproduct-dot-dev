import { UniversalRouteScreen } from '../../../packages/@green-stack-core/navigation/UniversalRouteScreen'
import * as HomeScreen from '../screens/HomeScreen'

/* --- / --------------------------------------------------------------------------------------- */

export default (props: any) => (
    <UniversalRouteScreen
        {...props}
        routeScreen={HomeScreen.default}
    />
)
