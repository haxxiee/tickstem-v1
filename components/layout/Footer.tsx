const footerYear: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-8 bg-transparent mt-auto">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div>&copy; {footerYear} |</div>
        Made with
        <svg
          viewBox="0 0 1792 1792"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 text-purple-300"
        >
          <path
            d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
            fill="currentColor"
          ></path>
        </svg>
        by Linus Foxell
      </div>
    </footer>
  );
};

export default Footer;
