import { RootTabScreenProps } from '../types';

import DefaultSwipeCards from '../components/SwipeCards';
import {View} from '../components/Themed';

export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {
    return (
        <View>
            <DefaultSwipeCards style={{flex: 1}} />
        </View>
    );
}
