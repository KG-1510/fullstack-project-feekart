export default function Loader({ color, className, style }) {
  return (
    <svg
      version="1.1"
      id="L5"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 50"
      enable-background="new 0 0 0 0"
      className={className}
      style={(typeof style === "object" && style) || {}}
    >
      <circle fill={color || "#fff"} stroke="none" cx="10" cy="25" r="7">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 15 ; 0 -15; 0 15"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill={color || "#fff"} stroke="none" cx="34" cy="25" r="7">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 10 ; 0 -10; 0 10"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill={color || "#fff"} stroke="none" cx="58" cy="25" r="7">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
}
