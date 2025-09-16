export function isMockEnabled(): boolean {
  return process.env.WP_GRAPHQL_MOCK === "true";
}
export function hasWpBackend(): boolean {
  return Boolean(process.env.WP_GRAPHQL_ENDPOINT) || isMockEnabled();
}
