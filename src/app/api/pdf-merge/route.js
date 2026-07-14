import { PDFDocument } from "pdf-lib";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const files = formData.getAll("files");

    if (!files || files.length < 2) {
      return new Response(
        JSON.stringify({
          error: "Please upload at least two PDF files.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();

      const pdf = await PDFDocument.load(bytes);

      const pages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );

      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    return new Response(mergedBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="CyberTools-Merged.pdf"',
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Failed to merge PDF files.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}