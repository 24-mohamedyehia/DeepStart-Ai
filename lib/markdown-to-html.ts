// Simple markdown to HTML converter
export function markdownToHtml(markdown: string): string {
  if (!markdown) return '';
  
  return markdown
    .split('\n')
    .map((line) => {
      // Headers
      if (line.startsWith('# ')) {
        return `<h1 class="text-2xl font-bold text-slate-800 mt-8 mb-4">${line.slice(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        return `<h2 class="text-xl font-semibold text-slate-700 mt-6 mb-3">${line.slice(3)}</h2>`;
      } else if (line.startsWith('### ')) {
        return `<h3 class="text-lg font-medium text-slate-600 mt-4 mb-2">${line.slice(4)}</h3>`;
      } 
      // Bold items
      else if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*(.*)/);
        if (match) {
          return `<li class="mb-2"><strong class="text-slate-700">${match[1]}</strong>${match[2]}</li>`;
        }
        return `<li class="mb-1">${line.slice(2)}</li>`;
      } 
      // List items
      else if (line.startsWith('- ')) {
        return `<li class="mb-1 ml-4">${line.slice(2)}</li>`;
      } 
      // Empty lines
      else if (line.trim() === '') {
        return '<br>';
      } 
      // Regular paragraphs
      else {
        return `<p class="mb-3 text-slate-600 leading-relaxed">${line}</p>`;
      }
    })
    .join('');
}
