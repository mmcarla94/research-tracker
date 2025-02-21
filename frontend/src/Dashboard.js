useEffect(() => {
  const fetchPublications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/publications');
      setPublications(response.data);
    } catch (error) {
      console.error('Error fetching publications:', error);
    }
  };

  fetchPublications();
}, []);
