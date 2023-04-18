import React from "react";

function Footer() {
  return (
    <footer className="footer fixed bottom-0 w-full p-4 bg-accent text-neutral-content h-12">
      <div className="grid-flow-col">
        <a
          className="text-neutral text-lg"
          href="https://www.linkedin.com/in/jefferson-griebel/"
        >
          LinkedIn
        </a>
        <a className="text-neutral text-lg" href="https://github.com/jcg0">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
