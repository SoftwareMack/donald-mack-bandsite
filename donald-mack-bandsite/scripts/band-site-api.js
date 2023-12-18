class BandSiteApi {
    constructor(apiKey) {
      this.apiKey =  "219418ec-045c-4402-bb00-39e394870cd4";
      this.baseUrl = 'https://project-1-api.herokuapp.com';
    }

    async postComment(comment) {
      const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;

      try {
        const response = await axios.post(url, comment, {
          headers: { 'Content-Type': 'application/json' },
        });

        return response.data;
      } catch (error) {
        console.error('Error posting comment:', error.response.data);
        throw error;
      }
    }

    async getComments() {
      const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;

      try {
        const response = await axios.get(url);
        const sortedComments = response.data.sort(
          (a, b) => b.timestamp - a.timestamp
        );

        return sortedComments;
      } catch (error) {
        console.error('Error getting comments:', error.response.data);
        throw error;
      }
    }

    async getShows() {
      const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`;

      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error getting shows:', error.response.data);
        throw error;
      }
    }
  }
  export default BandSiteApi
