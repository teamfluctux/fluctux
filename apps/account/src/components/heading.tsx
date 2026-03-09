export const Heading = ({ text }: { text?: string }) => {
  return (
    <h1 className="text-read_25 text-center font-medium mb-5 black-white-gradient-bt">
      {text}
    </h1>
  );
};
