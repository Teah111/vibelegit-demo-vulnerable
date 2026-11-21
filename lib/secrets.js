// ⚠️ TEST FIXTURE — every value here is FAKE and non-functional. Hardcoding
// secrets like this is the vulnerability; real apps must read them from the
// environment at runtime and never commit them.

export const STRIPE_SECRET_KEY = 'sk_live_00000000000000000000000000'
export const AWS_ACCESS_KEY_ID = 'AKIA0000000000000000'
export const SERVICE_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWtlIjoiZGVtbyJ9.0000000000000000000000000000000000000000000'
export const DATABASE_URL = 'postgres://admin:0000fakepw0000@db.internal:5432/app'
