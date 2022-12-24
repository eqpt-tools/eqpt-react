/**
 * A function to randomly choose a port
 */
export default function getPort() {
  return Math.floor(10000 + Math.random() * 50000);
}
