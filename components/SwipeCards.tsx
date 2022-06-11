import { StyleSheet, Alert, Button } from 'react-native';
import { View, Text } from './Themed';
import { Card } from '@rneui/themed';

import SwipeCards from 'react-native-swipe-cards';
import React from 'react';

function DonationCard(props) {
    return (
        <View style={styles.card}>
            <Card>
                <Card.Title>{props.text}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri:
                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                />
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component
                    structure than actual design.
                </Text>
            </Card>
        </View>
    )
}

function NoMoreCards(props) {
    return (
        <View>
            <Text style={styles.noMoreCardsText}>No more cards</Text>
        </View>
    )
}

export default function DefaultSwipeCards(props) {
    const [cards, setCards] = React.useState([
        { text: 'Tomato', backgroundColor: 'red' },
        { text: 'Aubergine', backgroundColor: 'purple' },
        { text: 'Courgette', backgroundColor: 'green' },
        { text: 'Blueberry', backgroundColor: 'blue' },
        { text: 'Umm...', backgroundColor: 'cyan' },
        { text: 'orange', backgroundColor: 'orange' }
    ])
    const handleYup = (card) => {
        console.log(`Yup for ${card.text}`)
    };
    const handleNope = (card) => {
        console.log(`Nope for ${card.text}`)
    }
    const handleMaybe = (card) => {
        console.log(`Maybe for ${card.text}`)
    }
    return (
        <SwipeCards
            cards={cards}
            renderCard={(cardData) => <DonationCard {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}

            handleYup={handleYup}
            handleNope={handleNope}
            handleMaybe={handleMaybe}
            hasMaybeAction
        />
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
    },
    noMoreCardsText: {
        fontSize: 22,
    }
});
