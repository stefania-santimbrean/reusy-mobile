import { RootTabScreenProps } from '../types';

import SwipeCards from '../components/SwipeCards';
import {View} from '../components/Themed';

export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {
    return (
        <View>
            <SwipeCards style={{flex: 1}} />
        </View>
    );
}
