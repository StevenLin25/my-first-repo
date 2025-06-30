async function sendRequest() {
  const endpoint = document.getElementById('endpoint').value;
  const payloadText = document.getElementById('payload').value;
  let payload;
  try {
    payload = JSON.parse(payloadText);
  } catch (e) {
    document.getElementById('response').textContent = 'Invalid JSON';
    return;
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    document.getElementById('response').textContent = text;
  } catch (err) {
    document.getElementById('response').textContent = 'Error: ' + err.message;
  }
}

document.getElementById('send').addEventListener('click', sendRequest);
