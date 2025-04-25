export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch("http://34.10.166.233/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic U2hydXRpIFNvbmk6N3FKczVIZzJMUXFEWmJO",
        "X-CSRFTOKEN":
          "oLVwMlyLxG0j6wmJhTIjJY8K1onWJQ6TCaae3pFrnr0eJsxBOZBCWsApBh6DGIr5",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong on the server." });
  }
}
