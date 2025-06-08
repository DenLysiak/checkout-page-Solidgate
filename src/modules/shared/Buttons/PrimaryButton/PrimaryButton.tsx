import { useState } from 'react';
import { ButtonType } from '../../types';
import classNames from 'classnames';
import { Spinner } from '../../Loader/Spinner/Spinner';

interface PrimaryButtonProps {
  buttonType: ButtonType;
  onClick: () => void;
  validateData: () => boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonType,
  onClick,
  validateData,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (validateData()) {
      return;
    }

    if (!isProcessing && !isSuccess) {
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);

          if (onClick) {
            onClick();
          }
        }, 3500);
      }, 3500);
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const buttonClasses = classNames('button', {
    processing: isProcessing,
    success: isSuccess,
    'is-mouse-down': isMouseDown && !isProcessing && !isSuccess,
  });

  const initialTextClasses = classNames(
    'button__text',
    'button__text--initial',
  );
  const processingTextClasses = classNames(
    'button__text',
    'button__text--processing',
  );
  const successTextClasses = classNames(
    'button__text',
    'button__text--success',
  );

  const initialText = 'Pay 99.00 USD';
  const processText = 'Processing payment';
  const successText = 'Successful payment!';

  return (
    <button
      type={buttonType}
      className={buttonClasses}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      disabled={isProcessing || isSuccess}
    >
      <span className={initialTextClasses}>{initialText}</span>

      <div className={processingTextClasses}>
        <Spinner />

        {processText}
      </div>

      <span className={successTextClasses}>{successText}</span>
    </button>
  );
};
