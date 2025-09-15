import React, { forwardRef } from 'react';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}

export interface Icon {
  (...args: any[]): React.ReactElement;
  displayName?: string;
}

export const createIconComponent = (
  iconName: string,
  iconNode: React.ReactNode[]
): Icon => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className,
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...rest}
        >
          {iconNode}
          {children}
        </svg>
      );
    }
  );

  Component.displayName = iconName;
  
  return Component as Icon;
};

// Default icon for testing
export const IconestIcon = createIconComponent('IconestIcon', [
  React.createElement('circle', { key: 'circle', cx: 12, cy: 12, r: 10 })
]);

export default IconestIcon;
