export default async function handler(req, res) {
  const ticker = req.query.ticker;

  if (!ticker) {
    return res.status(400).json({ error: "Missing ticker" });
  }

  const response = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_KEY}`
  );

  const data = await response.json();

  res.status(200).json(data);
}