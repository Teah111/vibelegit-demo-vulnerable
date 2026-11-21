// ⚠️ TEST FIXTURE — remote code execution via eval() of request data, and
// unvalidated request input.

export default function handler(req, res) {
  // VULNERABLE: executes whatever the caller sends. Never eval request data.
  const expr = req.body.expr
  const result = eval(expr)
  res.status(200).json({ result })
}
