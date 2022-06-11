import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { RootTabScreenProps } from '../types';

const users = [
    {
        name: 'brynn',
        avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
    {
        name: 'thot leader',
        avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
        name: 'jsa',
        avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
    {
        name: 'talhaconcepts',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'andy vitale',
        avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
    },
    {
        name: 'katy friedson',
        avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
];


export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title>Product 1</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        I want to offer my lamp to someone that might need it.
                    </Text>
                </Card>
                <Card>
                    <Card.Title>Product 2</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        I want to offer my sandwich macker to someone that might need it.
                    </Text>
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

