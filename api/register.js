export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Prepare the data to be sent to the external API
    const { email, password, role, full_name } = req.body;

    // Validation for required fields
    if (!email || !password || !role || !full_name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Prepare the request body to send to the external API
    const requestBody = {
      email,
      password,
      role,
      full_name,
    };

    // Make the POST request to the external registration API
    const response = await fetch("http://34.10.166.233/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add other necessary headers like Authorization here if required
      },
      body: JSON.stringify(requestBody),
    });

    // Parse the response from the external API
    const data = await response.json();
   console.log(data)
    // Handle the response based on the status code from the external API
    if (response.ok) {
      // If registration is successful, send success response
      return res.status(201).json(data);
    } else {
      // If registration fails, forward the error response from the external API
      return res.status(response.status).json(data);
    }
  } catch (err) {
    // Catch any error that happens during the request
    return res.status(500).json({ error: "Something went wrong on the server." });
  }
}
