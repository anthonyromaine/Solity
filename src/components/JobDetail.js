import React from 'react';
import { useWindowDimensions, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import RenderHtml from 'react-native-render-html';


const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`
};

export default function JobDetail({job, onPress, onBackPress}) {
    const { width } = useWindowDimensions();
    function handlePress() {
        onPress(job.url)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} style={styles.backBtnContainer}>
                <Text style={styles.btn}>Back</Text>
            </TouchableOpacity>
            <View style={styles.details}>
                    <Text style={styles.title}>{job.title}</Text>
                    <Text style={{textAlign: "center"}}>{job.company_name}</Text>
                    <Text style={{textAlign: "center"}}>{job.candidate_required_location}</Text>
                    <Text style={{textAlign: "center"}}>{job.salary}</Text>
            </View>
            
            <ScrollView styles={styles.description}>
                <RenderHtml
                    contentWidth={width}
                    source={{html: job.description}}
                />
            </ScrollView>
            <TouchableOpacity onPress={handlePress} style={styles.applyBtnContainer}>
                <Text style={styles.btn}>Apply</Text>
            </TouchableOpacity>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "95%",
        marginHorizontal: 20,
        backgroundColor: '#fff'
    },
    details: {
        width:"100%",
        alignItems: "center",
        marginBottom: 10
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24
    },
    description: {
        height: "60%"
    },
    btn: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16
    },
    applyBtnContainer: {
        backgroundColor: "#342c54",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        width: 100,
        alignSelf: "center",
    },
    backBtnContainer: {
        backgroundColor: "#342c54",
        borderRadius: 10,
        padding: 10,
        marginTop: 50,
        marginBottom: 20,
        width: 100
    }
});