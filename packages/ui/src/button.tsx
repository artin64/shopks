import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => {
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent border border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
  };

  return (
    <button
      className={`px-4 py-2 rounded-md transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
