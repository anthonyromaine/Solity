import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Linking, TouchableOpacity, Keyboard } from 'react-native';
import JobsList from './src/components/JobsList';
import { fetchJobs, fetchJobsSearchResults } from "./src/ajax";
import JobDetail from './src/components/JobDetail';
import SearchBar from './src/components/SearchBar';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const jobs = await fetchJobs();
      setJobs(jobs.jobs);
    }
    fetchData();
  }, []);

  function handleApplyPress(url){
    Linking.openURL(url)
  }

  function handleJobPress(index){
    setSelectedJob(index);
    setSelectedJobIndex(index);
  }
  
  function handleBackPress(index){
    setSelectedJob(null);
  }

  async function onSearch(searchTerm) {
    Keyboard.dismiss()
    const jobs = await fetchJobsSearchResults(searchTerm);
    setJobs(jobs.jobs);
  }

  if(jobs.length === 0){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  if(selectedJob === 0 || selectedJob !== null){
    return (
      <JobDetail job={jobs[selectedJob]} onPress={handleApplyPress} onBackPress={handleBackPress}/>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your perfect job</Text>
      <SearchBar onPress={onSearch} />
      <View style={styles.jobContainer}>
        <Text style={styles.resultsTitle}>{jobs.length} {jobs.length === 1 ? "Job Opportunity" : "Job Opportunities"}</Text>
        {jobs.length > 0 && <JobsList jobs={jobs} handleJobPress={handleJobPress} handleBackPress={handleBackPress} selectedJobIndex={selectedJobIndex} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent:"center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginHorizontal: 30,
  },
  jobContainer: {
    marginHorizontal: 30,
    marginTop: 20
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "normal",
    marginBottom: 20
  }
});


// TODO: Add Loading Animation after a search is submitted
// TODO: Make a search occur when return is pressed on the keyboard
// TODO: Make selectedJobIndex 0 when a new search occurs