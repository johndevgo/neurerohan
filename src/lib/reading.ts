// Paragraph spacing changes presentation, not the authored words or punctuation.
export function readingParagraphs(text: string, targetWords = 70): string[] {
  const sentences = [...new Intl.Segmenter("en", { granularity: "sentence" }).segment(text)].map((item) => item.segment.trim());
  const paragraphs: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    if (current && `${current} ${sentence}`.split(/\s+/).length > targetWords) { paragraphs.push(current); current = sentence; }
    else current = current ? `${current} ${sentence}` : sentence;
  }
  if (current) paragraphs.push(current);
  return paragraphs;
}
