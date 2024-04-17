class TypeCMS {
  constructor(obj) {
    this.baseUrl = obj.baseUrl;
    this.token = obj.token;
    this.projectId = obj.projectId;
  }

  async getEntries(body) {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/projects/${this.projectId}/content`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      // Handle error
    }
  }
}

export default TypeCMS;
