export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    try {
      const { promoter_first_name, promoter_last_name, promoter_phno } = req.body;
  
      // Check if required fields are provided
      if (!promoter_first_name || !promoter_last_name || !promoter_phno) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const accessToken = req.headers.authorization?.split(" ")[1]; // Extract access token from headers
  
      if (!accessToken) {
        return res.status(401).json({ message: "Access token is required" });
      }
  
      const response = await fetch("http://34.10.166.233/auth/create-promoter", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        return res.status(response.status).json({ message: responseData.message || "Failed to add promoter." });
      }
  
      const newEntry = {
        name: `${promoter_first_name} ${promoter_last_name}`,
        contact: promoter_phno,
        leads: 0,
        conversion: "0%",
        followUp: "N/A",
        revenue: "$0",
        status: "Active",
      };
  
      res.status(200).json({ message: "Promoter added successfully!", promoter: newEntry });
  
    } catch (error) {
      console.error("Error creating promoter:", error);
      res.status(500).json({ error: error?.message || "Something went wrong while creating the promoter." });
    }
  }
  