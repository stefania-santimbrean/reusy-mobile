import { StyleSheet, Alert, Button } from 'react-native';
import { View, Text } from './Themed';
import { Card } from '@rneui/themed';

import SwipeCards from 'react-native-swipe-cards';
import React from 'react';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

function DonationCard(props) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>{props.title}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={styles.cardCover}
                    source={{
                        uri: props.uri
                    }}
                />
                <Text style={styles.cardText}>
                    {props.text}
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
        {
            title: 'Tomato', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            text: 'The idea with React Native Elements is more about component structure than actual design.'
        },
        {
            title: 'Aubergine', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            text: 'The idea with React Native Elements is more about component structure than actual design.'
        },
        {
            title: 'Courgette', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            text: 'The idea with React Native Elements is more about component structure than actual design.'
        },
        {
            title: 'Blueberry', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            text: 'The idea with React Native Elements is more about component structure than actual design.'
        },
        {
            title: 'Umm...', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            text: 'The idea with React Native Elements is more about component structure than actual design.'
        },
        {
            title: 'orange', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            text: 'The idea with React Native Elements is more about component structure than actual design.'
        }
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
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Layout.window.width,
        height: Layout.window.height,
        padding: 8
    },
    card: {
        borderColor: Colors.dark.border,
        borderWidth: 2,
        borderRadius: 9,

    },
    noMoreCardsText: {
        fontSize: 22,
        color: Colors.dark.tint
    },
    cardText: {
        fontSize: 18,
        alignItems: 'flex-start'
    },
    cardTitle: {
        fontSize: 20
    },
    cardCoved: {
        padding: 20
    }
});
