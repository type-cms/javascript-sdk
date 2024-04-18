// Define an interface for the constructor parameters
interface TypeCMSConfig {
  baseUrl: string;
  token: string;
  projectId: string;
}

// Define an interface for the body parameter
interface EntryQuery {
  [key: string]: any;
}

class TypeCMS {
  private baseUrl: string;
  private token: string;
  private projectId: string;

  constructor(obj: TypeCMSConfig) {
    this.baseUrl = obj.baseUrl;
    this.token = obj.token;
    this.projectId = obj.projectId;
  }

  // Method to fetch entries, properly typed with return type
  async getEntries(body: EntryQuery): Promise<any> {
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
      console.error('Failed to fetch entries:', error);
      throw error; // Rethrow or handle accordingly
    }
  }
}

export default TypeCMS;
