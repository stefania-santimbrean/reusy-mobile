import { StyleSheet, Alert, Button } from 'react-native';
import { View, Text } from './Themed';
import { Card } from '@rneui/themed';

import SwipeCards from 'react-native-swipe-cards';
import React from 'react';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { Post } from '../types';

function DonationCard(props) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>{props.name}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={styles.cardCover}
                    source={{
                        uri: props.coverUrl
                    }}
                />
                <Text style={styles.cardText}>
                    {props.description}
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

export default function DefaultSwipeCards({ posts }) {
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
            cards={posts}
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
