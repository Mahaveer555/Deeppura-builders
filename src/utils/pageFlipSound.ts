/**
 * Synthesize an authentic paper page-flip rustle sound using the browser's Web Audio API.
 * Zero external audio files required, runs instantly with zero latency on mobile & desktop.
 */
export const playPageTurnSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const duration = 0.16; // 160ms realistic paper rustle
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Filtered pink-ish noise simulating the friction of glossy brochure paper
    for (let i = 0; i < bufferSize; i++) {
      const progress = i / bufferSize;
      const white = (Math.random() * 2 - 1);
      // Realistic envelope: quick attack, textured rustle body, gentle tail release
      const envelope = Math.sin(progress * Math.PI) * Math.exp(-progress * 2.2);
      data[i] = white * envelope * 0.28;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Bandpass filter to model the frequency response of flipping brochure paper (crisp 1800Hz sliding to 600Hz)
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(550, ctx.currentTime + duration);
    filter.Q.value = 1.4;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
  } catch {
    // If audio is blocked by user browser policy, fail silently
  }
};

