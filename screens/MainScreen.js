import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

const MainScreen = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_43424cf1d08ffe7163f36d868d0effefcb252&q=tesla%20in%20english');
            const data = await response.json();

            console.log('Data from API:', data);
            setNews(data.results);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handleSearchNews = () => {
        const filteredNews = news.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        return filteredNews;
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CardScreen', { article: item })}>
            <View>
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.imgStyles}
                />
                <View style={styles.textContainerStyles}>
                    <Text style={styles.headingStyles}>{item.title}</Text>
                    <Text style={styles.subHeadingStyles}>{item.pubDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search News"
                onChangeText={(text) => setSearch(text)}
                value={search}
            />
            <FlatList
                // data={news}
                data={handleSearchNews()}
                renderItem={renderItem}
                keyExtractor={(item) => item.article_id}
            />
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    searchInput: {
        backgroundColor: '#fff',
        paddingHorizontal: 100,
        paddingVertical: 8,
        marginTop: 20,
        borderRadius: 20,
    },
    imgStyles: {
        width: 150,
        height: 100,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 20,
    },
    textContainerStyles: {
        flex: 1,
        marginLeft: 10
    },
    headingStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    subHeadingStyles: {
        color: 'white',
        marginVertical: 10,
    },
});


