export const Fetch = async () => {
    try {
        const response = await fetch('http://localhost:3500/gifts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}