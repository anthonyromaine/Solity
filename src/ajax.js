// Remotive Job API Documentation
// https://remotive.io/api-documentation

// Get splash screen and icon from figma

const apiHost = "https://remotive.io"


export async function fetchJobs() {
    try {
        const response = await fetch(apiHost + "/api/remote-jobs");
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}


export async function fetchJobsSearchResults(searchTerm) {
    try {
        const response = await fetch(apiHost + "/api/remote-jobs?search=" + searchTerm);
        const responsJson = await response.json();
        return responsJson;
    } catch (error) {
        console.error(error);
    }
}