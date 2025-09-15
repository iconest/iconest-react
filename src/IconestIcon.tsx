import React, { forwardRef } from 'react';

/**
 * Common icon properties that developers typically use
 */
export interface CommonIconProps {
  /**
   * The size of the icon. Can be a number (pixels) or string (e.g., "24px", "1.5rem")
   * @default 24
   */
  size?: number | string;
  
  /**
   * The color of the icon. Can be any valid CSS color value
   * @default "currentColor"
   */
  color?: string;
  
  /**
   * Additional CSS classes to apply to the icon
   */
  className?: string;
}

/**
 * Extended icon properties including SVG-specific attributes
 */
export interface IconProps extends CommonIconProps, Omit<React.SVGProps<SVGSVGElement>, 'ref' | 'color' | 'width' | 'height' | 'className'> {
  /**
   * The stroke width of the icon
   * @default 2
   */
  strokeWidth?: number | string;
  
  /**
   * Whether to use absolute stroke width (scales with icon size)
   * @default false
   */
  absoluteStrokeWidth?: boolean;
}

export interface Icon extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> {
  /**
   * The display name of the icon component
   */
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
