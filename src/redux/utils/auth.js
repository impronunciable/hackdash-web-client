
export function authHeader (idToken) {
  return {
    'Authorization': `Bearer ${idToken}`,
    'Content-Type': 'application/json'
  }
}
