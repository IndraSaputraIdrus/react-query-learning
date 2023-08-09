type Props = {
  error: {
    message: string;
  };
};

function ErrorMessage({ error }: Props) {
  return <h2 className="text-center text-red-700 italic">{error.message}</h2>;
}

export default ErrorMessage;
