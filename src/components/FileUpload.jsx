import React, { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return setStatus('Pick a file first');
    const fd = new FormData();
    fd.append('file', file);
    setStatus('Uploading...');
    try {
      const res = await fetch('/upload.php', {
        method: 'POST',
        body: fd
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      setStatus('Uploaded: ' + data.originalName);
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
      <div>{status}</div>
    </form>
  );
}
