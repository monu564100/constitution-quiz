const GOOGLE_API_KEY = 'AIzaSyB7ctFozrQf15BhLco_g0htuMk520pJIGw';
const CX = 'e57c25cf72a0e42da';

export const getSearchResults = async (query) => {
    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${CX}`);
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!data.items) {
            throw new Error('No search results found');
        }

        return data.items; // Search results are in `items` array
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};
