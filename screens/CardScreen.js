import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const CardScreen = ({ route }) => {
    const { article } = route.params;

    const handleOpenURL = () => {
        if (article.link) {
            Linking.openURL(article.link);
        } else {
            console.warn('No URL found for this news.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOpenURL}>
                <View style={styles.card}>
                    <Image
                        source={{ uri: article.image_url }}
                        style={styles.image}
                    />
                    <View style={styles.content}>
                        <Text style={styles.title}>{article.title}</Text>
                        <Text style={styles.pubDate}>{article.pubDate}</Text>
                        <Text style={styles.description}>{article.content}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    pubDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
    },
});

export default CardScreen;
