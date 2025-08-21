function log(target, level, message) {
  const now = new Date();
  console.log(`[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`);
}
log('console', 'DEBUG', 'debug message...');
