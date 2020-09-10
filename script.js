const playsInline = "playsInline" in document.createElement("video");
info.innerHTML = `
  playsinline supported: ${playsInline} <br/>
  useragent: ${navigator.userAgent}
`;