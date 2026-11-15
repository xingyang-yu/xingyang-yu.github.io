(() => {
  const progress = document.querySelector('.progress');
  const updateProgress = () => {
    const range = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${range > 0 ? Math.min(100, scrollY / range * 100) : 0}%`;
  };
  addEventListener('scroll', updateProgress, {passive:true});
  addEventListener('resize', updateProgress);
  updateProgress();
  const search = document.getElementById('search');
  if (search) search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase().replace(/[–—-]/g,' ');
    let count = 0;
    document.querySelectorAll('.chapter-row').forEach(row => {
      const hay = (row.dataset.search + ' ' + row.getAttribute('href')).replace(/[–—-]/g,' ');
      row.hidden = !q.split(/\s+/).every(word => hay.includes(word));
      if (!row.hidden) count++;
    });
    document.getElementById('search-count').textContent = `${count} ${count === 1 ? 'story' : 'stories'}`;
    document.getElementById('empty').hidden = count !== 0;
    updateProgress();
  });
  const copy = document.querySelector('.copy-link');
  if (copy) copy.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(location.href);
      status.textContent = 'Link copied';
    } catch (_) {
      status.textContent = 'Copy the address from your browser to share this story.';
    }
  });
})();
