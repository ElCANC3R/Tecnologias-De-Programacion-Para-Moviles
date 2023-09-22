import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, FlatList } from "react-native";

const CharactersScrean = () => {
    const [characters, setCharacters] = useState([]);




    useEffect(() => {
        console.log('useEffect');
        const getApiData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                setCharacters(data.results);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getApiData();
    }, []);


    return (
        <View>
            <Text styles={{ fontSize: 40, }}>CharactersScrean</Text>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, name, status, type, species } }) => {
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: "#eee",
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>{name}</Text>
                        <Text style={{ fontSize: 18 }}>{id}</Text>
                        <Text style={{ fontSize: 18 }}>{status}</Text>
                        <Text style={{ fontSize: 18 }}>{type}</Text>
                        <Text style={{ fontSize: 18 }}>{species}</Text>

                    </View>
                }}
            />

        </View>
    );
};

export default CharactersScrean;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 20,
        flex: 1,
        borderRadius: 5,
        height: 40,
        borderColor: "#fff",
        color: "#fff",
    },
});


