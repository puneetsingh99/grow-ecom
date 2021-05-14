export const WishlistSvg = ({ toggle }) => {
  return (
    <svg width="1.5em" height="1em" viewBox="0 0 24 24">
      <path
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
        fill={toggle ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2px"
      ></path>
    </svg>
  );
};
