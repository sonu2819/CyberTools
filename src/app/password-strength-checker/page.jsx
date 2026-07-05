import PasswordStrengthCheckerClient from "./PasswordStrengthCheckerClient";

export const metadata = {
  title: "Password Strength Checker - CyberTools",
  description:
    "Check password strength instantly with CyberTools free Password Strength Checker.",
  keywords: [
    "password strength checker",
    "password security",
    "strong password test",
    "password analyzer",
  ],
};

export default function Page() {
  return <PasswordStrengthCheckerClient />;
}