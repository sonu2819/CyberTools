// import { lookup } from "whois";

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const domain = searchParams.get("domain");

//   if (!domain) {
//     return Response.json(
//       { error: "Domain is required" },
//       { status: 400 }
//     );
//   }

//   return new Promise((resolve) => {
//     lookup(domain, (err, data) => {
//       if (err) {
//         resolve(
//           Response.json(
//             { error: err.message },
//             { status: 500 }
//           )
//         );
//         return;
//       }

//       resolve(Response.json({ result: data }));
//     });
//   });
// }

import { lookup } from "whois";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return Response.json(
      { error: "Domain is required." },
      { status: 400 }
    );
  }

  return new Promise((resolve) => {
    lookup(domain, (err, data) => {
      if (err) {
        resolve(
          Response.json(
            { error: err.message },
            { status: 500 }
          )
        );
        return;
      }

      const lines = data.split("\n");

     const info = {
  domain: "",
  registrar: "",
  created: "",
  updated: "",
  expires: "",
  organization: "",
  country: "",
  registrantEmail: "",
  techEmail: "",
  abuseEmail: "",
  abusePhone: "",
  status: [],
  nameservers: [],
};

      for (const line of lines) {
        const l = line.trim();

        if (l.startsWith("Domain Name:"))
          info.domain = l.replace("Domain Name:", "").trim();

        else if (l.startsWith("Registrar:"))
          info.registrar = l.replace("Registrar:", "").trim();

        else if (l.startsWith("Creation Date:"))
          info.created = l.replace("Creation Date:", "").trim();

        else if (l.startsWith("Updated Date:"))
          info.updated = l.replace("Updated Date:", "").trim();

        else if (l.startsWith("Registrar Registration Expiration Date:"))
          info.expires = l
            .replace("Registrar Registration Expiration Date:", "")
            .trim();

        else if (l.startsWith("Registry Expiry Date:"))
          info.expires = l.replace("Registry Expiry Date:", "").trim();

        else if (l.startsWith("Registrant Organization:"))
          info.organization = l
            .replace("Registrant Organization:", "")
            .trim();

        else if (l.startsWith("Registrant Country:"))
          info.country = l
            .replace("Registrant Country:", "")
            .trim();

        else if (l.startsWith("Domain Status:"))
          info.status.push(
            l.replace("Domain Status:", "").split("(")[0].trim()
          );

        else if (l.startsWith("Name Server:"))
          info.nameservers.push(
            l.replace("Name Server:", "").trim()
          );
          else if (l.startsWith("Registrant Email:"))
  info.registrantEmail = l.replace("Registrant Email:", "").trim();

else if (l.startsWith("Tech Email:"))
  info.techEmail = l.replace("Tech Email:", "").trim();

else if (l.startsWith("Registrar Abuse Contact:"))
  info.abuseEmail = l.replace("Registrar Abuse Contact:", "").trim();

else if (l.startsWith("Registrar Abuse Contact Phone:"))
  info.abusePhone = l.replace("Registrar Abuse Contact Phone:", "").trim();
      }

      resolve(Response.json(info));
      console.log(data);
    });
  });
}