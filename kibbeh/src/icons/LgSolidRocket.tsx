import * as React from "react";

function SvgLgSolidRocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={39}
      height={39}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.176 4.083a.336.336 0 00-.251-.26c-4.144-1.012-13.719 2.598-18.906 7.785a22.419 22.419 0 00-2.521 2.979c-1.6-.145-3.2-.023-4.563.571-3.847 1.691-4.966 6.11-5.279 8.006a.682.682 0 00.747.792l6.177-.678c.008.594.046 1.066.084 1.394.03.32.175.617.404.845l2.392 2.392c.228.229.525.373.845.404.328.038.8.076 1.387.084l-.678 6.17a.682.682 0 00.792.746c1.897-.305 6.322-1.424 8.005-5.27.595-1.364.716-2.956.58-4.548a22.46 22.46 0 002.985-2.522c5.21-5.18 8.798-14.54 7.8-18.89zm-12.43 12.18a3.25 3.25 0 010-4.601 3.25 3.25 0 014.6 0 3.25 3.25 0 010 4.6 3.25 3.25 0 01-4.6 0z"
        fill="#5D7290"
      />
      <path
        d="M13.292 28.983c-.32.32-.89.503-1.508.61a2.05 2.05 0 01-2.361-2.362c.106-.617.282-1.188.602-1.5l.007-.008a.255.255 0 00-.213-.434 3.501 3.501 0 00-2.05.998c-1.37 1.37-1.5 6.46-1.5 6.46s5.096-.13 6.467-1.501a3.478 3.478 0 00.998-2.05c.023-.243-.274-.388-.442-.213z"
        fill="#FD4D4D"
      />
    </svg>
  );
}

export default SvgLgSolidRocket;
