class APILoader {
  constructor() {
    this.url = '';
  }

    getData = async () => {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    }

    setData = async (data = null) => {
      try {
        const res = await fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return res.status;
      } catch (error) {
        return error;
      }
    }
}

export default APILoader;