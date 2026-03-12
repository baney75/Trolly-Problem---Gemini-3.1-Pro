export const FootnoteRef = ({ id }: { id: number }) => (
  <sup className="text-current opacity-70 font-bold cursor-pointer hover:underline hover:opacity-100 ml-0.5 transition-opacity">
    <a href={`#fn${id}`}>[{id}]</a>
  </sup>
);
