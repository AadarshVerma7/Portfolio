import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Your email address where you want to receive messages
const MY_EMAIL = "work.aadarsh.verma@gmail.com";

export async function POST(request: Request) {
  try {
    // =====================================================
    // CHECK API KEY
    // =====================================================

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // =====================================================
    // GET FORM DATA
    // =====================================================

    const body = await request.json();

    const { name, email, subject, message } = body;

    // =====================================================
    // VALIDATE FORM DATA
    // =====================================================

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // SEND MESSAGE TO YOUR EMAIL
    // =====================================================

    const ownerEmail = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      // Your email address
      to: [MY_EMAIL],

      // When you click Reply in Gmail,
      // it will reply directly to the visitor
      replyTo: email,

      subject: `New Portfolio Message: ${subject}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            background: #050706;
            color: #e7dcc6;
            border: 1px solid #2a2a26;
            border-radius: 16px;
            overflow: hidden;
          "
        >

          <!-- HEADER -->

          <div
            style="
              padding: 30px 35px;
              border-bottom: 1px solid #2a2a26;
            "
          >

            <p
              style="
                margin: 0 0 12px;
                color: #3f9c9c;
                font-size: 11px;
                letter-spacing: 3px;
                text-transform: uppercase;
              "
            >
              Portfolio Contact
            </p>

            <h1
              style="
                margin: 0;
                color: #d6b06f;
                font-size: 26px;
              "
            >
              New Message Received
            </h1>

          </div>

          <!-- CONTENT -->

          <div style="padding: 35px;">

            <!-- NAME -->

            <div style="margin-bottom: 25px;">

              <p
                style="
                  margin: 0 0 6px;
                  color: #777;
                  font-size: 11px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                From
              </p>

              <p
                style="
                  margin: 0;
                  color: #e7dcc6;
                  font-size: 17px;
                "
              >
                ${name}
              </p>

            </div>

            <!-- EMAIL -->

            <div style="margin-bottom: 25px;">

              <p
                style="
                  margin: 0 0 6px;
                  color: #777;
                  font-size: 11px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Email
              </p>

              <p
                style="
                  margin: 0;
                  color: #3f9c9c;
                  font-size: 15px;
                "
              >
                ${email}
              </p>

            </div>

            <!-- SUBJECT -->

            <div style="margin-bottom: 25px;">

              <p
                style="
                  margin: 0 0 6px;
                  color: #777;
                  font-size: 11px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Subject
              </p>

              <p
                style="
                  margin: 0;
                  color: #d6b06f;
                  font-size: 16px;
                "
              >
                ${subject}
              </p>

            </div>

            <!-- MESSAGE -->

            <div>

              <p
                style="
                  margin: 0 0 10px;
                  color: #777;
                  font-size: 11px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Message
              </p>

              <div
                style="
                  padding: 20px;
                  background: #0a0d0b;
                  border-left: 3px solid #d6b06f;
                  border-radius: 6px;
                  color: #cccccc;
                  font-size: 15px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                "
              >
                ${message}
              </div>

            </div>

          </div>

          <!-- FOOTER -->

          <div
            style="
              padding: 20px 35px;
              border-top: 1px solid #2a2a26;
              color: #666;
              font-size: 11px;
            "
          >
            Sent from your portfolio contact form.
          </div>

        </div>
      `,
    });

    // =====================================================
    // CHECK IF EMAIL FAILED
    // =====================================================

    if (ownerEmail.error) {
      console.error(
        "Failed to send portfolio email:",
        ownerEmail.error
      );

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message.",
        },
        {
          status: 500,
        }
      );
    }

    // =====================================================
    // SUCCESS
    // =====================================================

    console.log(
      "Portfolio email sent successfully:",
      ownerEmail.data
    );

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    // =====================================================
    // UNEXPECTED ERROR
    // =====================================================

    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending the message.",
      },
      {
        status: 500,
      }
    );
  }
}