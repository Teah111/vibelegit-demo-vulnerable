// ⚠️ TEST FIXTURE — stored/reflected XSS via dangerouslySetInnerHTML.

export default function Profile({ bio }) {
  // VULNERABLE: `bio` is user-supplied and injected as raw HTML without
  // sanitization. Sanitize with DOMPurify, or render it as text.
  return <div className="bio" dangerouslySetInnerHTML={{ __html: bio }} />
}
