/* eslint-disable max-len */
interface NoteMessageProps {
  productName: string;
}

export const NoteMessage: React.FC<NoteMessageProps> = ({ productName }) => {
  return (
    <div className="message">
      You&apos;ll have your{' '}
      <span className="message__span">{productName} during 1 month.</span> After
      this period of time, your plan will be{' '}
      <span className="message__span">automatically renewed </span>
      with its original price without any discounts applied.
    </div>
  );
};
