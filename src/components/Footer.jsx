import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <Link href="/about">
        About
      </Link>

      {" • "}

      <Link href="/privacy-policy">
        Privacy Policy
      </Link>

      {" • "}

      <Link href="/contact">
        Contact
      </Link>

    </footer>
  );
}