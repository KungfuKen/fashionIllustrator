/*export default async function handler(req, res) {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Pinned to a specific version of Stable Diffusion
        // See https://replicate.com/stability-ai/sdxl
        version: "42a996d39a96aedc57b2e0aa8105dea39c9c89d9d266caf6bb4327a1c191b061",
  
        // This is the text prompt that will be submitted by a form on the frontend
        input: { prompt: "fashion sketch, beautiful" + req.body.prompt },
      }),
    });
  
    if (response.status !== 201) {
      let error = await response.json();
      res.statusCode = 500;
      res.end(JSON.stringify({ detail: error.detail }));
      return;
    }
  
    const prediction = await response.json();
    res.statusCode = 201;
    res.end(JSON.stringify(prediction));
  }*/