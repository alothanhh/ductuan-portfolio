function Title({ text }: { text: string }) {
  return (
    <h1
      style={{
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: "48px",
        textAlign: "center",
      }}
    >
      {text}
    </h1>
  );
}

export default Title;
