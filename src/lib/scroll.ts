export function scrollToId(hash: string) {
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (!el) return;
  const nav = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - nav;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
