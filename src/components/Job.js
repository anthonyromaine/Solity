import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Job({ job, onPress, index }) {
    return (
        <TouchableOpacity style={styles.jobContainer} onPress={()=> onPress(index)}>
            <View style={job.company_logo_url ? styles.logoContainer : null}>
                {job.company_logo_url ? <Image style={styles.companyLogo} source={{ uri: job.company_logo_url }} /> : null}
            </View>
            <View style={styles.jobDetails}>
                <Text style={styles.wrapContainer}>
                    <Text style={{ color: "#fff" }}>{job.company_name}</Text>
                    {'\n'}
                    <Text style={{fontWeight: "bold"}}>{job.title}</Text>
                    {job.salary ? <Text style={styles.salary}>{'\n'}{job.salary}</Text> : null}
                    {job.candidate_required_location ? <Text style={{ color: "#fff" }}>{'\n'}{job.candidate_required_location}</Text> : null}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    jobContainer: {
        flexDirection: "row",
        backgroundColor: "#342c54",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        height: 110
    },
    companyLogo: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10
    },
    wrapContainer: {
        color: "#fff",
        flex: 1,
        flexWrap: "wrap"
    },
    logoContainer: {
        marginRight: 10
    },
    salary: {
        color: "#fff"
    },
    jobDetails: {
        width: "80%"
    }
});