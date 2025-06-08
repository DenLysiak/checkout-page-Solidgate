import { useState } from 'react';
import { ButtonType } from '../../types';
import classNames from 'classnames';

interface PrimaryButtonProps {
  buttonType: ButtonType;
  initialText: string;
  processingText: string;
  successText: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonType,
  onClick,
  initialText,
  processingText,
  successText,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
        }, 3000);
      }, 3000);
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Using classnames library for conditional classes
  const buttonClasses = classNames('button', {
    processing: isProcessing,
    success: isSuccess,
    // Apply mouse down specific styles only if not processing or successful
    'is-mouse-down': isMouseDown && !isProcessing && !isSuccess,
  });

  const initialTextClasses = classNames('buttonText', 'buttonText--initial');
  const processingTextClasses = classNames(
    'buttonText',
    'buttonText--processing',
  );
  const successTextClasses = classNames('buttonText', 'buttonText--success');

  return (
    <button
      type={buttonType}
      className={buttonClasses}
      //className="primary-button"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      disabled={isProcessing || isSuccess}
    >
      <span className={initialTextClasses}>{initialText}</span>
      {/* <span className="primary-button__text primary-button__text--initial">
        {initialText}
      </span> */}

      <span className={processingTextClasses}>{processingText}</span>

      {/* <span className="primary-button__text primary-button__text--process">
        {processingText}
      </span> */}

      <span className={successTextClasses}>{successText}</span>

      {/* <span className="primary-button__text primary-button__text--success">
        {successText}
      </span> */}
    </button>
  );
};
