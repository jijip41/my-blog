# **2023 Year in Review**

## **What Did I Do?**

- Contributed to both **frontend and backend development**, helping the team deliver key features efficiently.

### **Key Contributions:**

- **Built RESTful APIs** to convert object data into **PDFs**, store them in **AWS S3**, and retrieve them on demand.
- **Developed a UI application** to track and manage the **customer contract process**, enhancing transparency and efficiency.
- **Designed customer-facing UI pages** to display **invoice history**, providing a seamless user experience.
- **Implemented webhooks** to automate **internal team workflows**, improving productivity and reducing manual effort.

---

## **Technologies & Experience**

| **Technology**        | **Experience**                                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Node.js & Express** | - Developed **RESTful APIs** for invoice generation and storage. <br> - Managed request/response handling using `express`, ensuring robust API performance. <br> - Implemented logging and error handling for stability.                  |
| **Puppeteer**         | - Automated **PDF generation** for invoices using a headless browser. <br> - Rendered dynamic HTML templates to generate structured and branded PDFs. <br> - Optimized performance for fast and efficient PDF creation.                   |
| **AWS S3 (SDK)**      | - Integrated **AWS S3** for storing and retrieving invoices. <br> - Used `PutObjectCommand` for **uploading PDFs** and `GetObjectCommand` for **fetching files on demand**. <br> - Configured **S3Client** for efficient file management. |
| **File System (fs)**  | - Used `fs.readFileSync()` and `fs.createWriteStream()` to **handle local file operations** before uploading to S3. <br> - Implemented **automated file cleanup** to prevent storage issues.                                              |
| **Next.js**           | - Developed an **invoice history page** using **server-side rendering (SSR)** for faster loading and improved SEO.                                                                                                                        |
| **React**             | - Built **modular and reusable UI components** for a scalable frontend architecture. <br> - Utilized **GraphQL queries** to efficiently retrieve data from the backend, improving API performance.                                        |
