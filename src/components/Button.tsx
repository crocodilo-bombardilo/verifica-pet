import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  href,
  ...props
}) => {
  const baseStyles = 'font-bold rounded-md transition-all duration-200 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-gray-700',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white'
  };

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>{children}</a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>{children}</button>
  );
};
