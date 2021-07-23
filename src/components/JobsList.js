import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Job from './Job';

export default function JobsList({ jobs, handleJobPress, selectedJobIndex }) {
    const [numberOfResultsToDisplay, setNumberOfResultsToDisplay] = useState(50)
    const ITEM_HEIGHT = 110;
    let screenHeight = Dimensions.get("window").height;

    function endReached() {
        setNumberOfResultsToDisplay((prevState) => prevState + 50)
    }

    if(selectedJobIndex > numberOfResultsToDisplay-1){
        let adjustedResults = Math.ceil(selectedJobIndex/50)*50 + 50
        setNumberOfResultsToDisplay((prevState) => {
            console.log(adjustedResults, selectedJobIndex)
            return adjustedResults
        });
    }

    return (
        <FlatList
            style={{ height: screenHeight - 220 }}
            onEndReached={endReached}
            onEndReachedThreshold={1}
            data={jobs.slice(0, numberOfResultsToDisplay)}
            renderItem={({item, index}) => <Job job={item} index={index} onPress={handleJobPress}/>}
            keyExtractor={job => String(job.id)}
            getItemLayout={(data, index) => (
                {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
            )}
            initialScrollIndex={selectedJobIndex}
        />
    )
}
