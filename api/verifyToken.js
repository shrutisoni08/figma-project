export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    try {
      const accessToken = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  
      if (!accessToken) {
        return res.status(400).json({ message: "Access token is required" });
      }
  
      const response = await fetch("http://34.10.166.233/auth/verify-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ message: "Token verification failed" });
      }
  
      res.status(response.status).json(await response.json());
    } catch (err) {
      res.status(500).json({ error: "Something went wrong on the server." });
    }
  }
  