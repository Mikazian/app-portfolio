interface ProgressBarProps {
  isActive: boolean;
}

const ProgressBar = ({ isActive }: ProgressBarProps) => {
  return <div className={`progress-bar ${isActive ? "active" : ""}`} />;
};

export default ProgressBar;
