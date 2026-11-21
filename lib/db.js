// ⚠️ TEST FIXTURE — SQL injection by string interpolation.

export function getUser(db, id) {
  // VULNERABLE: `id` is interpolated straight into the SQL string, so a value
  // like "1 OR 1=1" rewrites the query. Use parameterized queries instead.
  const query = `SELECT * FROM users WHERE id = ${id}`
  return db.query(query)
}

export function searchUsers(db, name) {
  // VULNERABLE: concatenation into the query.
  const query = 'SELECT id, email FROM users WHERE name = ' + "'" + name + "'"
  return db.query(query)
}
