interface HeaderProps {
  selectedGenre: {
    title: String;
  };
}

export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
