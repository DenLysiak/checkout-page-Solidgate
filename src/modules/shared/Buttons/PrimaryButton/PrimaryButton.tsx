import { ButtonType } from '../../types';

interface PrimaryButtonProps {
  buttonType: ButtonType;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonType }) => {
  return (
    <button type={buttonType} className="primary-button">
      Pay 99.00 USD
    </button>
  );
};
