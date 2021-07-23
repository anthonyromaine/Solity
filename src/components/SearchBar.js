import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



export default function SearchBar({onPress}) {
    const [searchInput, setSearchInput] = useState("")

    function handleChange(input){
        setSearchInput(input);
    }

    return (
        <View style={styles.searchContainer}>
            <TextInput style={styles.searchBar} placeholder="What are you looking for?" onChangeText={handleChange}/>
            <TouchableOpacity style={styles.searchBtnContainer} onPress={()=>onPress(searchInput)}>
                <FontAwesome name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
      marginHorizontal: 30,
      marginTop: 20,
      flexDirection: "row",
      width: "90%"
    },
    searchBar: {
      backgroundColor: "#f3f4f7",
      borderRadius: 5,
      padding: 8,
      height: 40,
      width: "80%",
      marginRight: 10
    },
    searchBtnContainer: {
      width: 40,
      height: 40,
      backgroundColor: "#342c54",
      alignItems: "center",
      borderRadius: 10,
      padding: 5
    }
  });