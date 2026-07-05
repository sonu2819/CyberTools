import JWTDecoderClient from "./JWTDecoderClient";

export const metadata = {
  title: "JWT Decoder - CyberTools",
  description:
    "Decode JWT tokens instantly with CyberTools free JWT Decoder.",
  keywords: [
    "jwt decoder",
    "jwt parser",
    "decode jwt token",
    "jwt inspector",
  ],
};

export default function Page() {
  return <JWTDecoderClient />;
}