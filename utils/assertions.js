function assertStatus(response, expectedStatus) {
  if (response.status() !== expectedStatus) {
    throw new Error(`Expected HTTP ${expectedStatus}, received ${response.status()}.`);
  }
}

function assertStatusIn(response, expectedStatuses) {
  if (!expectedStatuses.includes(response.status())) {
    throw new Error(`Expected HTTP ${expectedStatuses.join(', ')}, received ${response.status()}.`);
  }
}

module.exports = { assertStatus, assertStatusIn };
