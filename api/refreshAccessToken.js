export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    try {
      const { refresh } = req.body;
  
      if (!refresh) {
        return res.status(400).json({ message: "Refresh token is required" });
      }
  
      const response = await fetch("http://34.10.166.233/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ refresh }),
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ message: "Refresh token invalid or expired" });
      }
  
      const data = await response.json();
      res.status(200).json({ access: data.access });
    } catch (err) {
      res.status(500).json({ error: "Something went wrong on the server." });
    }
  }
  